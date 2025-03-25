<?php
session_start();
require_once '../includes/db.php';

// Verificar sesión de administrador
if (!isset($_SESSION['admin'])) {
    header('Location: login.php');
    exit;
}

// Obtener ID de cita
$id_cita = $_GET['id'] ?? die("
    <div style='padding:20px; background:#fff3e0; color:#ef6c00;'>
        ⚠️ Error: No se especificó una cita
    </div>
");

// Consulta optimizada con JOIN múltiple
$sql = "SELECT 
            c.id_unico,
            c.fecha,
            c.hora,
            c.especialidad,
            c.estado,
            p.nombre_completo,
            p.telefono,
            p.email,
            d.nombre AS nombre_doctor,
            pg.comprobante_path
        FROM citas c
        JOIN pacientes p ON c.id_paciente = p.id
        JOIN doctores d ON c.id_doctor = d.id
        LEFT JOIN pagos pg ON c.id = pg.id_cita
        WHERE c.id_unico = ?";

$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "s", $id_cita);
mysqli_stmt_execute($stmt);
$cita = mysqli_fetch_assoc(mysqli_stmt_get_result($stmt));

// Verificar si existe la cita
if (!$cita) {
    die("
        <div style='padding:20px; background:#ffebee; color:#b71c1c;'>
            ❌ Error: La cita no existe o fue eliminada
        </div>
    ");
}

// Formatear fechas
$fecha_legible = date("d/m/Y", strtotime($cita['fecha']));
$hora_12h = date("h:i A", strtotime($cita['hora']));
?>

<!DOCTYPE html>
<html>
<head>
    <title>Detalles de Cita</title>
    <style>
        .container { max-width: 800px; margin: 2rem auto; padding: 20px; }
        .card { background: white; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 25px; }
        .section-title { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        .comprobante-box { border: 1px dashed #95a5a6; padding: 15px; margin-top: 20px; }
        .btn-group { margin-top: 25px; display: flex; gap: 15px; }
        button { padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; }
        .confirm-btn { background: #27ae60; color: white; }
        .cancel-btn { background: #e74c3c; color: white; }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <h1 class="section-title">Detalles Complejos de la Cita</h1>
            
            <!-- Datos Principales -->
            <div class="datos-principales">
                <p><strong>🔖 ID de Cita:</strong> <?= $cita['id_unico'] ?></p>
                <p><strong>📅 Fecha:</strong> <?= $fecha_legible ?></p>
                <p><strong>⏰ Hora:</strong> <?= $hora_12h ?></p>
                <p><strong>🩺 Especialidad:</strong> <?= $cita['especialidad'] ?></p>
                <p><strong>📊 Estado:</strong> 
                    <span style="color: <?= 
                        $cita['estado'] === 'Confirmada' ? '#27ae60' : 
                        ($cita['estado'] === 'Cancelada' ? '#e74c3c' : '#f1c40f') 
                    ?>">
                        <?= $cita['estado'] ?>
                    </span>
                </p>
            </div>

            <!-- Datos del Paciente -->
            <div class="seccion-paciente">
                <h2 class="section-title">👤 Información del Paciente</h2>
                <p><strong>Nombre:</strong> <?= htmlspecialchars($cita['nombre_completo']) ?></p>
                <p><strong>📞 Teléfono:</strong> <?= $cita['telefono'] ?? 'No proporcionado' ?></p>
                <p><strong>📧 Email:</strong> <?= $cita['email'] ?? 'No proporcionado' ?></p>
            </div>

            <!-- Datos del Doctor -->
            <div class="seccion-doctor">
                <h2 class="section-title">👨⚕ Médico Asignado</h2>
                <p><strong>Nombre:</strong> <?= $cita['nombre_doctor'] ?></p>
            </div>

            <!-- Comprobante -->
            <?php if (!empty($cita['comprobante_path'])): ?>
            <div class="comprobante-box">
                <h3>📄 Comprobante de Pago</h3>
                <?php if (pathinfo($cita['comprobante_path'], PATHINFO_EXTENSION) === 'pdf'): ?>
                    <a href="<?= $cita['comprobante_path'] ?>" target="_blank" style="color: #2980b9;">
                        🔗 Ver Comprobante PDF
                    </a>
                <?php else: ?>
                    <img src="<?= $cita['comprobante_path'] ?>" 
                         alt="Comprobante de pago" 
                         style="max-width: 100%; border: 1px solid #ddd; padding: 5px;">
                <?php endif; ?>
            </div>
            <?php endif; ?>

            <!-- Acciones -->
            <div class="btn-group">
                <?php if ($cita['estado'] === 'Pendiente'): ?>
                    <form method="POST" action="procesar_estado.php">
                        <input type="hidden" name="id_cita" value="<?= $cita['id_unico'] ?>">
                        <button type="submit" name="accion" value="confirmar" class="confirm-btn">
                            ✅ Confirmar Cita
                        </button>
                        <button type="submit" name="accion" value="cancelar" class="cancel-btn">
                            ❌ Cancelar Cita
                        </button>
                    </form>
                <?php else: ?>
                    <p>⚠️ Esta cita ya fue procesada</p>
                <?php endif; ?>
            </div>
        </div>
    </div>
</body>
</html>
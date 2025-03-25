<?php
require_once '../includes/db.php';

// Mostrar formulario de búsqueda
if (!isset($_GET['id'])) {
    ?>
    <!DOCTYPE html>
    <html>
    <head>
        <title>Ver Estado de Cita</title>
        <style>
            .busqueda-cita { max-width: 500px; margin: 50px auto; padding: 30px; border: 1px solid #ddd; }
            input[type="text"] { width: 100%; padding: 10px; margin: 10px 0; }
        </style>
    </head>
    <body>
        <div class="busqueda-cita">
            <h2>🔍 Consultar Estado de Cita</h2>
            <form method="GET">
                <input type="text" name="id" placeholder="Ingresa tu ID de cita (ej: CITA-DERM-ABC123)" required>
                <button type="submit">Buscar</button>
            </form>
        </div>
    </body>
    </html>
    <?php
    exit;
}

// Procesar búsqueda
$id_cita = $_GET['id'];
$sql = "SELECT c.*, p.nombre_completo 
        FROM citas c
        JOIN pacientes p ON c.id_paciente = p.id
        WHERE c.id_unico = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "s", $id_cita);
mysqli_stmt_execute($stmt);
$cita = mysqli_fetch_assoc(mysqli_stmt_get_result($stmt));

?>
<!DOCTYPE html>
<html>
<head>
    <title>Estado de Cita</title>
    <style>
        .estado-cita { max-width: 600px; margin: 50px auto; padding: 30px; }
        .confirmada { color: #2ecc71; }
        .cancelada { color: #e74c3c; }
        .pendiente { color: #f1c40f; }
    </style>
</head>
<body>
    <div class="estado-cita">
        <?php if ($cita): ?>
            <h2>Estado de tu Cita: <span class="<?= strtolower($cita['estado']) ?>"><?= $cita['estado'] ?></span></h2>
            <p><strong>ID:</strong> <?= $cita['id_unico'] ?></p>
            <p><strong>Paciente:</strong> <?= htmlspecialchars($cita['nombre_completo']) ?></p>
            <p><strong>Fecha:</strong> <?= date("d/m/Y", strtotime($cita['fecha'])) ?></p>
            <p><strong>Hora:</strong> <?= date("h:i A", strtotime($cita['hora'])) ?></p>
            <p><strong>Especialidad:</strong> <?= $cita['especialidad'] ?></p>
            
            <?php if ($cita['estado'] === 'Cancelada'): ?>
                <div style="margin-top:20px; padding:15px; background:#f8d7da;">
                    ℹ️ Para reagendar, contacta a la clínica por WhatsApp
                </div>
            <?php endif; ?>
        <?php else: ?>
            <div style="color:#c0392b;">
                ❌ No se encontró ninguna cita con ese ID
            </div>
        <?php endif; ?>
    </div>
</body>
</html>
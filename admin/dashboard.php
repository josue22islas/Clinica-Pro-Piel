<?php
session_start();
require_once '../includes/db.php';

// Verificar sesión de administrador
if (!isset($_SESSION['admin'])) {
    header('Location: login.php');
    exit;
}

// Obtener todas las citas con datos básicos
$sql = "SELECT 
            c.id_unico,
            c.fecha,
            c.hora,
            c.especialidad,
            c.estado,
            p.nombre_completo 
        FROM citas c
        JOIN pacientes p ON c.id_paciente = p.id
        ORDER BY c.fecha DESC";

$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Panel de Administración</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f8f9fa; }
        .estado-pendiente { color: #ffc107; }
        .estado-confirmada { color: #28a745; }
        .estado-cancelada { color: #dc3545; }
    </style>
</head>
<body>
    <h1>📅 Agenda de Citas</h1>
    
    <table>
        <thead>
            <tr>
                <th>ID Cita</th>
                <th>Paciente</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Especialidad</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php while ($row = mysqli_fetch_assoc($result)): ?>
            <tr>
                <td><?= htmlspecialchars($row['id_unico']) ?></td>
                <td><?= htmlspecialchars($row['nombre_completo']) ?></td>
                <td><?= date("d/m/Y", strtotime($row['fecha'])) ?></td>
                <td><?= date("H:i", strtotime($row['hora'])) ?></td>
                <td><?= $row['especialidad'] ?></td>
                <td class="estado-<?= strtolower($row['estado']) ?>">
                    <?= $row['estado'] ?>
                </td>
                <td>
                    <a href="ver_cita.php?id=<?= $row['id_unico'] ?>">🔍 Ver Detalles</a>
                </td>
            </tr>
            <?php endwhile; ?>
        </tbody>
    </table>
</body>
</html>
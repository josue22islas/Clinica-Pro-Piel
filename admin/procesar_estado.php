<?php
session_start();
require_once '../includes/db.php';

// Verificar sesión de administrador
if (!isset($_SESSION['admin'])) {
    die("Acceso denegado");
}

// Obtener datos del formulario
$id_cita = $_POST['id_cita'] ?? die("ID de cita no proporcionado");
$accion = $_POST['accion'] ?? die("Acción no especificada");

// Validar acción permitida
if (!in_array($accion, ['confirmar', 'cancelar'])) {
    die("Acción inválida");
}

// Obtener datos actuales de la cita
$sql = "SELECT c.*, p.telefono 
        FROM citas c
        JOIN pacientes p ON c.id_paciente = p.id
        WHERE c.id_unico = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "s", $id_cita);
mysqli_stmt_execute($stmt);
$cita = mysqli_fetch_assoc(mysqli_stmt_get_result($stmt));

if (!$cita) {
    die("Cita no encontrada");
}

// Actualizar estado
$nuevo_estado = ($accion === 'confirmar') ? 'Confirmada' : 'Cancelada';
$sql_update = "UPDATE citas SET estado = ? WHERE id_unico = ?";
$stmt_update = mysqli_prepare($conn, $sql_update);
mysqli_stmt_bind_param($stmt_update, "ss", $nuevo_estado, $id_cita);
mysqli_stmt_execute($stmt_update);

// Enviar notificación por WhatsApp
$telefono = $cita['telefono'];
$fecha_formateada = date("d/m/Y", strtotime($cita['fecha']));
$hora_formateada = date("h:i A", strtotime($cita['hora']));

$mensaje = urlencode(
    ($accion === 'confirmar') 
    ? "✅ *Cita Confirmada*\nID: $id_cita\nFecha: $fecha_formateada\nHora: $hora_formateada\nEspecialidad: {$cita['especialidad']}\n\n¡Gracias por confiar en nosotros! Recuerda traer tu documento de identificación."
    : "❌ *Cita Cancelada*\nID: $id_cita\nFecha: $fecha_formateada\nHora: $hora_formateada\n\nLamentamos informarte que tu cita ha sido cancelada. Por favor contacta a la clínica para reagendar."
);

// Redirigir a WhatsApp
header("Location: https://api.whatsapp.com/send?phone=52$telefono&text=$mensaje");
exit;
?>
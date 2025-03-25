<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
require_once '../includes/db.php';

// Validar datos del paciente
if (!isset($_SESSION['paciente'])) {
    die("Error: Completa el formulario de agendado.");
}

// Obtener especialidad del paciente
$especialidad = $_SESSION['paciente']['especialidad'];

// Buscar un doctor para la especialidad
$sql_doctor = "SELECT id FROM doctores WHERE especialidad = ? LIMIT 1";
$stmt_doctor = mysqli_prepare($conn, $sql_doctor);
mysqli_stmt_bind_param($stmt_doctor, "s", $especialidad);
mysqli_stmt_execute($stmt_doctor);
$doctor = mysqli_fetch_assoc(mysqli_stmt_get_result($stmt_doctor));

// Validar doctor
if (!$doctor) {
    die("Error: No hay doctores disponibles para $especialidad.");
}

// Generar ID único para la cita
$id_unico = "CITA-" . substr($especialidad, 0, 4) . "-" . uniqid();

// Insertar paciente
$sql_paciente = "INSERT INTO pacientes (nombre_completo, telefono, email) VALUES (?, ?, ?)";
$stmt_paciente = mysqli_prepare($conn, $sql_paciente);
mysqli_stmt_bind_param($stmt_paciente, "sss", 
    $_SESSION['paciente']['nombre'],
    $_SESSION['paciente']['telefono'],
    $_SESSION['paciente']['email']
);
mysqli_stmt_execute($stmt_paciente);
$id_paciente = mysqli_insert_id($conn);

// Insertar cita
$sql_cita = "INSERT INTO citas (id_unico, id_paciente, id_doctor, fecha, hora, especialidad) 
             VALUES (?, ?, ?, ?, ?, ?)";
$stmt_cita = mysqli_prepare($conn, $sql_cita);
mysqli_stmt_bind_param($stmt_cita, "siisss", 
    $id_unico,
    $id_paciente,
    $doctor['id'],
    $_SESSION['paciente']['fecha'],
    $_SESSION['paciente']['hora'],
    $especialidad
);
mysqli_stmt_execute($stmt_cita);

// Mostrar datos de confirmación
?>
<!DOCTYPE html>
<html>
<head>
    <title>Confirmar Cita</title>
    <style>
        .resumen { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; }
        .upload-box { border: 2px dashed #ccc; padding: 20px; margin: 20px 0; text-align: center; }
    </style>
</head>
<body>
    <div class="resumen">
        <h2>✅ Cita Agendada: <?= $id_unico ?></h2>
        <p><strong>Paciente:</strong> <?= htmlspecialchars($_SESSION['paciente']['nombre']) ?></p>
        <p><strong>Fecha:</strong> <?= $_SESSION['paciente']['fecha'] ?> <?= $_SESSION['paciente']['hora'] ?></p>
        <p><strong>Monto a Pagar:</strong> $400 MXN (50% de $800 MXN)</p>
        
        <div class="upload-box">
            <form action="enviar_pago.php" method="POST" enctype="multipart/form-data">
                <input type="hidden" name="id_cita" value="<?= $id_unico ?>">
                <input type="file" name="comprobante" accept=".jpg,.jpeg,.png,.pdf" required>
                <p>Sube tu comprobante (JPG, PNG o PDF, máximo 5MB)</p>
                <button type="submit">Subir Comprobante</button>
            </form>
        </div>
    </div>
</body>
</html>
<?php
unset($_SESSION['paciente']);
?>
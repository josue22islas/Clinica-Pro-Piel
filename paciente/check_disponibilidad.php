<?php
require_once '../includes/db.php';

function horarioDisponible($doctor_id, $fecha, $hora, $conn) {
    $sql = "SELECT COUNT(*) as total FROM citas 
            WHERE id_doctor = ? 
            AND fecha = ? 
            AND hora = ?";
    
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "iss", $doctor_id, $fecha, $hora);
    mysqli_stmt_execute($stmt);
    
    $result = mysqli_stmt_get_result($stmt);
    $row = mysqli_fetch_assoc($result);
    
    return $row['total'] == 0;
}

$response = ['disponible' => false];

if(isset($_GET['fecha'], $_GET['hora'], $_GET['especialidad'])) {
    // Obtener doctor
    $sql_doctor = "SELECT id FROM doctores WHERE especialidad = ? LIMIT 1";
    $stmt = mysqli_prepare($conn, $sql_doctor);
    mysqli_stmt_bind_param($stmt, "s", $_GET['especialidad']);
    mysqli_stmt_execute($stmt);
    $doctor = mysqli_fetch_assoc(mysqli_stmt_get_result($stmt));
    
    if($doctor) {
        $response['disponible'] = horarioDisponible(
            $doctor['id'],
            $_GET['fecha'],
            $_GET['hora'],
            $conn
        );
    }
}

header('Content-Type: application/json');
echo json_encode($response);
?>
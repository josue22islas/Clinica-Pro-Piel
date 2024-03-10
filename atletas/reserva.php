<?php

session_start();
include 'conex_db/conex_db.php';

//Redireccionar si no hay sesion iniciada
if (!isset($_SESSION['email'])) {
    header("Location: ../login.php");
    exit;
}

?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
         <!--Contenido arrogado CDN de un servidos de boostrap-->
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

     <!--CDN de font Awesome-->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

</head>
<body>
    
<style>

body {
            background-color:black;

        }

    .container{
        background-color:white;
        width:505px;
        padding: 40px;
        margin:220px;
        border-radius:18px;
        color:blue;
        font-size:22px;
        font-family:arial;
        border: 2px solid green;
        
    

        
    }
</style>
    

<?php


// Obtener el ID del usuario basado en su correo electrónico
$email = $_SESSION['email'];
$stmt = $conn->prepare("SELECT id FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();
$usuario_id = $user['id'];

// Procesar la reserva cuando se reciba una solicitud POST
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    // Recibe y valida los datos del formulario
    $fecha = isset($_POST['fecha']) ? $_POST['fecha'] : null;
    $horario = isset($_POST['horario']) ? $_POST['horario'] : null;

    // Verifica si todos los datos necesarios están presentes
    if (!$fecha || !$horario) {
        echo "<br><center><div class='container'><span class='text-danger'>Datos de reserva incompletos.</span><hr><i class='fas fa-window-close fa-3x' style='color: red;'></i><br><a style='font-size:18px;' href='clases.php'>regresar</div>";
        exit;
    }

    // Verificar si el usuario ya ha reservado en este día
    $stmt = $conn->prepare("SELECT COUNT(*) AS count FROM citas WHERE usuario_id = ? AND fecha = ?");
    $stmt->bind_param("is", $usuario_id, $fecha);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if($row['count'] > 0) {
        echo "<br><center><div class='container'><span class='text-danger'>Ya has reservado una cita para este día.</span><hr><i class='fas fa-window-close fa-3x' style='color: red;'></i><br><a style='font-size:18px;' href='clases.php'>regresar</div>";
    } else {
        // Verificar disponibilidad de cupos para el horario seleccionado
        $stmt = $conn->prepare("SELECT COUNT(*) AS count FROM citas WHERE fecha = ? AND horario = ?");
        $stmt->bind_param("ss", $fecha, $horario);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();

        if($row['count'] < 15) {
            // Hay disponibilidad, proceder a reservar
            $insert = $conn->prepare("INSERT INTO citas (usuario_id, fecha, horario) VALUES (?, ?, ?)");
            $insert->bind_param("iss", $usuario_id, $fecha, $horario);
            $insert->execute();

            if($insert->affected_rows > 0) {
                echo "<br><center><div class='container' style='color: rgb(25, 218, 57);'>&nbsp; Cita reservada con éxito.<hr><i class='fas fa-check-circle fa-3x' style='color: rgb(25, 218, 57);'></i><br><a style='font-size:18px;' href='clases.php'>regresar</div>";
            } else {
                echo "<br><center><div class='container'><span class='text-danger'>Error al reservar la cita.</span><hr><i class='fas fa-window-close fa-3x' style='color: red;'></i></div>";
            }
        } else {
            echo "<br><center><div class='container'>El horario seleccionado está lleno </div>";
        }
    }

    $stmt->close();
} else {
    echo "<br><center><div class='container'><span class='text-danger'>Método de solicitud no válido.</span><hr><i class='fas fa-window-close fa-3x' style='color: red;'></i><br><a style='font-size:18px;' href='clases.php'>regresar</div>";
}
?>



</body>
</html>
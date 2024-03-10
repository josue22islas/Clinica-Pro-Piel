<?php

$mensaje = " ";
// Conexión a la base de datos (Asegúrate de cambiar las credenciales según tu configuración)
$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Verificar si se ha enviado el formulario antes de obtener los datos
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener los datos del formulario si existen
    $nombreCompleto = isset($_POST['nombre_completo']) ? $_POST['nombre_completo'] : '';
    $telefono = isset($_POST['telefono']) ? $_POST['telefono'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : '';

    // Insertar los datos en la base de datos
    $sqlInsert = "INSERT INTO contactenos (nombre_completo, telefono, email, mensaje) 
                  VALUES ('$nombreCompleto', '$telefono', '$email', '$mensaje')";

    if ($conn->query($sqlInsert) === TRUE) {
        header('location: index.html?envio=mensaje_enviado_exitosamente');
        exit();
    } else {
        echo "Error al almacenar los datos: " . $conn->error;
    }
}

$conn->close();

?>
 
 <!--<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensaje Enviado Exitosamente - Cross Army Fitness</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: blue;
        }
        .success-message {
            margin-top: 50px;
            padding: 20px;
            background-color: #4caf50;
            color: #ffffff;
            border-radius: 10px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
    </style>
</head>
<body>
    <div class="success-message">
        <h1><?php//
            //if (isset($mensaje)) {
               // echo '<h1>' . $mensaje . '</h1>';
           // }
            ?></h1>
        <p>Gracias por contactarnos. Tu mensaje ha sido enviado con éxito. Te responderemos a la brevedad posible.</p>
        <p>Para más información sobre Cross Army Fitness, visita nuestro sitio web: <a href="index.html">www.crossarmyfitness.com</a></p>
        <p><a href="index.html">Click en  Regresar</a></p>
    </div>

    <div>
      <img src="img/logoCA.png" alt="" width="30%">
    </div>
</body>
</html>---->

  























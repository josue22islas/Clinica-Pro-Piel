<?php

session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
  header('Location: ../login.php');
  exit;
}

$mensaje = "";


$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

// Conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtiene los datos del formulario
    $usuario_id = $_POST['usuario_id'];
    $tipo_membresia = $_POST['tipo_membresia'];
    $precio = $_POST['precio'];
    $fecha_inicio = $_POST['fecha_inicio'];
    $fecha_termino = $_POST['fecha_termino'];

    // Prepara y ejecuta la consulta de inserción
    $sql = "INSERT INTO membresias (usuario_id, tipo_membresia, precio, fecha_inicio, fecha_termino)
            VALUES ('$usuario_id', '$tipo_membresia', '$precio', '$fecha_inicio', '$fecha_termino')";

    if ($conn->query($sql) === TRUE) {
        header("location: consulta de membresias.php");
    } else {
        $mensaje = "Error al registrar la membresía: " . $conn->error;
    }
}

$conn->close();
?>
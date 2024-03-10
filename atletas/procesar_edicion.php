<?php
session_start();

if (!isset($_SESSION['email'])) {
    header('Location: ../login.php');
    exit;
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cross_army_fitness";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

if ($_POST) {
    $nombre = $_POST['nombre'];

    $ciudad = $_POST['ciudad'];
    $codigo_postal = $_POST['codigo_postal'];
    $pais_codigo = $_POST['pais_codigo'];
    $telefono = $_POST['telefono'];
    $edad = $_POST['edad'];
    $sexo = $_POST['sexo'];
   

    $id = $_POST['id'];

    $sql = "UPDATE usuarios SET nombre = '$nombre', ciudad = '$ciudad', codigo_postal = '$codigo_postal', pais_codigo = '$pais_codigo', telefono = '$telefono', edad = '$edad', sexo = '$sexo' WHERE id = {$id}";

    if ($conn->query($sql) === true) {
        header("location: perfil  edit.php?actualizado=true");// en esta como se trabaja con conn muy efectivo 
        exit(); // Asegúrate de detener la ejecución después de la redirección
    } else {
        echo "Error: " . $sql . ' ' . $conn->error;
    }

    $conn->close();
}
?>

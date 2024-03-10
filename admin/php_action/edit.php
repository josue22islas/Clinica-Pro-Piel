<?php
session_start();

if (!isset($_SESSION['email'])) {
    header('Location: ../login privilegiados.php');
    exit;
}

$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

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
    $categoria = $_POST['categoria'];
    $fecha_registro = $_POST['fecha_registro'];

    $id = $_POST['id'];

    $sql = "UPDATE usuarios SET nombre = '$nombre', ciudad = '$ciudad', codigo_postal = '$codigo_postal', pais_codigo = '$pais_codigo', telefono = '$telefono', edad = '$edad', sexo = '$sexo', categoria = '$categoria', fecha_registro = '$fecha_registro' WHERE id = {$id}";

    if ($conn->query($sql) === true) {
        header("location: ../reporte de atletas.php?actualizado=true");// en esta como se trabaja con conn muy efectivo 
        exit(); // Asegúrate de detener la ejecución después de la redirección
        //header("location: ../reporte de atletas.php");
    } else {
        echo "Error: " . $sql . ' ' . $conn->error;
    }

    $conn->close();
}
?>

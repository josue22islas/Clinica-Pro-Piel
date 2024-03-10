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
    $id = $_POST['id'];
    $sql = "UPDATE usuarios SET estatus = 'inactivo' WHERE id = {$id}";

    if ($conn->query($sql) === true) {
        header("location: ../reporte de atletas.php");
    } else {
        echo "error " . $sql . ' ' . $conn->error;
    }

    $conn->close();
}

?>

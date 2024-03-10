<?php

session_start();
if (!isset($_SESSION['email'])) {
  header('Location: ../login_privilegiados.php'); // Corregí el nombre del archivo
  exit;
}

$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}

if ($_POST) {
    $id = $_POST['id'];

    $sql = "DELETE FROM usuarios WHERE id = {$id}";

    if ($conn->query($sql) === true) {
        header("location: ../inactivos.php");
    } else {
        echo "Error al eliminar el usuario: " . $conn->error;
    }

    $conn->close();
}
?>


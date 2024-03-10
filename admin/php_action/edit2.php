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
   
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];
    $contraseña_hash = password_hash($contraseña, PASSWORD_DEFAULT); // $contraseña_hash que guarda el hash seguro de la contraseña cuando la actualizamos
    

    $id = $_POST['id'];

    $sql = "UPDATE usuarios SET  email = '$email', contraseña = '$contraseña_hash' WHERE id = {$id}";

    if ($conn->query($sql) === true) {
        header("location: ../reporte de atletas.php?actualizado_password=true");// en esta como se trabaja con conn muy efectivo 
        exit(); // Asegúrate de detener la ejecución después de la redirección
        //header("location: ../reporte de atletas.php");
    } else {
        echo "Error: " . $sql . ' ' . $conn->error;
    }

    $conn->close();
}
?>

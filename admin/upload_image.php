<?php
session_start();

// Obtener la información del usuario desde la base de datos
require_once '../conex_db/conex_db.php';

if (isset($_SESSION['email'])) {
    $email = $_SESSION['email'];

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['imagen'])) {
        
        $imagen = file_get_contents($_FILES['imagen']['tmp_name']);
        $imagen = $conn->real_escape_string($imagen);

        $sql = "UPDATE usuarios SET imagen='$imagen' WHERE email='$email'";
        if ($conn->query($sql) === TRUE) {
            header("Location: perfil admin.php");
        } else {
            echo "Error: " . $conn->error;
        }

        $conn->close();
    } else {
        header("Location: perfil admin.php");
        exit();
    }
} else {
    header("Location: perfil admin.php");
    exit();
}
?>

<?php
session_start();
require_once '../conex_db/conex_db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "DELETE FROM galeria WHERE id = $id";
    if ($conn->query($sql) === TRUE) {
        // Guardar mensaje en sesión
        $_SESSION['eliminacion_exitosa'] = true;
        header('Location: galeria de usuario.php');
        exit;
    } else {
        echo "Error al eliminar la imagen: " . $conn->error;
    }
    $conn->close();
} else {
    echo "ID de imagen no especificado.";
}
?>

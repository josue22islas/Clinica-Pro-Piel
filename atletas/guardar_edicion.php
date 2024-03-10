<?php
session_start();
require_once '../conex_db/conex_db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $nuevoNombre = $_POST['nombre'];

    // Verificar si se proporcionó una nueva imagen
    if ($_FILES['nueva_imagen']['error'] === UPLOAD_ERR_OK) {
        $nuevaImagen = file_get_contents($_FILES['nueva_imagen']['tmp_name']);
        $sql = "UPDATE galeria SET nombre = '$nuevoNombre', imagen = ? WHERE id = $id";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('s', $nuevaImagen);
    } else {
        // Si no se proporciona una nueva imagen, solo actualiza el nombre
        $sql = "UPDATE galeria SET nombre = '$nuevoNombre' WHERE id = $id";
        $stmt = $conn->prepare($sql);
    }

    if ($stmt->execute()) {
        $_SESSION['editada_correctamente'] = true;//solo funciona con sentencias stmt ojocon eso
                  header("location: galeria de usuario.php");
                  exit();
       // header('Location: galeria de usuario.php');
        //exit;
    } else {
        echo "Error al guardar los cambios: " . $conn->error;
    }
    $stmt->close();
} else {
    echo "Acceso no autorizado.";
}
?>

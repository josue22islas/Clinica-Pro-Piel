<?php
// Verificamos si se ha enviado un ID válido
if(isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id = $_GET['id'];
    
    // Conectamos a la base de datos
    $conn = new mysqli("localhost", "u990524785_josue_islas", "Erik22isla_", "u990524785_cross_army");

    // Verificamos la conexión
    if ($conn->connect_error) {
        die("Error al conectar con la base de datos: " . $conn->connect_error);
    }

    // Consulta para actualizar el estado del usuario a 'activo'
    $sql = "UPDATE productos SET ESTATUS = 'activo' WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        header ("location: productos admin.php");
    } else {
        echo "Error al actualizar el estado del usuario: " . $conn->error;
    }

    // Cerramos la conexión
    $conn->close();
} else {
    echo "ID de usuario no válido.";
}
?>
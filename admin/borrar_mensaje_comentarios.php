<?php
// Verificar si se ha proporcionado un ID válido para eliminar
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    // Configuración de la conexión a la base de datos
    $servername = "localhost";
    $username = "u990524785_josue_islas";
    $password = "Erik22isla_";
    $dbname = "u990524785_cross_army";

    // Crear conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error en la conexión: " . $conn->connect_error);
    }

    // Obtener el ID del comentario a eliminar
    $id_comentario = $_GET['id'];

    // Construir la consulta para eliminar el comentario
    $sql = "DELETE FROM comentarios WHERE id = $id_comentario";

    // Ejecutar la consulta DELETE
    if ($conn->query($sql) === TRUE) {
        // Redireccionar a la página de origen o mostrar un mensaje de éxito
        header('location: reporte_comentarios.php?mensaje=borrado_exitoso');
        exit();
    } else {
        echo "Error al eliminar el comentario: " . $conn->error;
    }

    // Cerrar la conexión a la base de datos
    $conn->close();
} else {
    echo "ID de comentario no válido.";
}
?>

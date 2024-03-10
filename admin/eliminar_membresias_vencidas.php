<?php
// Verificar si se ha proporcionado un ID válido
if (isset($_GET["id"]) && is_numeric($_GET["id"])) {
    $id = $_GET["id"];

    // Conexión a la base de datos (reemplaza con tus propios datos)
   $servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Error en la conexión: " . $conn->connect_error);
    }

    // Preparar la consulta SQL para eliminar el producto
    $sql = "DELETE FROM membresias WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);

    // Ejecutar la consulta y comprobar si se eliminó el producto correctamente
    if ($stmt->execute()) {
        header('location: membresias_vencidas.php');
    } else {
        echo "Error al eliminar el producto: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "ID de producto no válido.";
}
?>
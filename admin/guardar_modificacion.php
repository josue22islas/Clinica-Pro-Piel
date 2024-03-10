<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recibir los datos del formulario
    $id = $_POST["id"];
    $nombre = $_POST["nombre"];
    $descripcion = $_POST["descripcion"];
    $precio = $_POST["precio"];

    // Conexión a la base de datos (reemplaza con tus propios datos)
   $servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Error en la conexión: " . $conn->connect_error);
    }

    // Verificar si se proporcionó una nueva imagen
    if (!empty($_FILES["imagen"]["tmp_name"]) && file_exists($_FILES["imagen"]["tmp_name"])) {
        // Obtener el nombre y la ubicación temporal de la nueva imagen subida
        $imagen_temporal = $_FILES["imagen"]["tmp_name"];

        // Leer el contenido de la imagen como datos binarios
        $imagen_binaria = file_get_contents($imagen_temporal);

        // Actualizar la imagen del producto en la base de datos
        $sql = "UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, imagen = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssdsi", $nombre, $descripcion, $precio, $imagen_binaria, $id);
    } else {
        // Si no se proporcionó una nueva imagen, actualizar solo los demás campos
        $sql = "UPDATE productos SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssdi", $nombre, $descripcion, $precio, $id);
    }

    // Ejecutar la consulta y comprobar si se actualizaron los datos correctamente
    if ($stmt->execute()) {
        header('location: productos admin.php');
    } else {
        echo "Error al guardar los cambios: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>

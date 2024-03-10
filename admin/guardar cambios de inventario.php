<?php
// Establecer la conexión con la base de datos (cambiar según tus credenciales)
$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("La conexión a la base de datos falló: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];

    // Procesar la imagen
    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
        $imagen_tmp = $_FILES['imagen']['tmp_name'];
        $imagen_data = file_get_contents($imagen_tmp);
    }

    // Consulta SQL para actualizar el registro con el ID proporcionado
    if (isset($imagen_data) && !empty($imagen_data)) {
        $sql = "UPDATE inventario SET nombre = ?, descripcion = ?, imagen = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssbi", $nombre, $descripcion, $imagen_data, $id);
    } else {
        $sql = "UPDATE inventario SET nombre = ?, descripcion = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssi", $nombre, $descripcion, $id);
    }

    if ($stmt->execute()) {
        header("location: inventario crosfit.php");
    } else {
        echo "Error al modificar el registro: " . $conn->error;
    }

    $stmt->close();
}

// Cerrar la conexión
$conn->close();
?>

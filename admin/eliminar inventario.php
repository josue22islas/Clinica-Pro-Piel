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

if (isset($_GET['id']) && !empty($_GET['id'])) {
    $id = $_GET['id'];

    // Consulta SQL para eliminar el registro con el ID proporcionado
    $sql = "DELETE FROM inventario WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        header("location: inventario crosfit inactivo.php");
    } else {
        echo "Error al eliminar el registro: " . $conn->error;
    }
} else {
    echo "ID del registro no válido.";
}

// Cerrar la conexión
$conn->close();
?>

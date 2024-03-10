<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si se envió el formulario de edición
if (isset($_POST['guardar'])) {
    $id = $_POST['id'];
    $tipo_membresia = $_POST['tipo_membresia'];
    $precio = $_POST['precio'];
    $fecha_inicio = $_POST['fecha_inicio'];
    $fecha_termino = $_POST['fecha_termino'];

    // Preparar la consulta con sentencias preparadas
    $sql = "UPDATE membresias SET tipo_membresia=?, precio=?, fecha_inicio=?, fecha_termino=? WHERE id=?";

    $stmt = $conn->prepare($sql);
    if ($stmt) {
        // Vincular parámetros
        $stmt->bind_param("ssssi", $tipo_membresia, $precio, $fecha_inicio, $fecha_termino, $id);

        // Ejecutar la consulta
        if ($stmt->execute()) {
            $stmt->close();
            header("location: consulta de membresias.php");
            exit(); // Importante: terminar el script después de redireccionar
        } else {
            echo "Error al actualizar el registro: " . $stmt->error;
        }
    } else {
        echo "Error en la preparación de la consulta: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>

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

// Verificar si se envió el formulario de eliminación
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Eliminar el registro de la tabla
    $sql = "DELETE FROM pagos_adeudos WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        header ("location: historial_pagos.php");
    } else {
        echo "Error al eliminar el registro: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>
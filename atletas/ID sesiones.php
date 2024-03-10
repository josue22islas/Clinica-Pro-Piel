<?php


// Verificar si el usuario ha iniciado sesión
if (isset($_SESSION['email'])) {
    // Conexión a la base de datos (cambia los valores según tu configuración)
    $servidor = "localhost";
    $usuario = "root";
    $contrasena = "";
    $basedatos = "cross_army_fitness";

    $conexion = new mysqli($servidor, $usuario, $contrasena, $basedatos);

    // Verificar la conexión
    if ($conexion->connect_error) {
        die("Error en la conexión: " . $conexion->connect_error);
    }

    // Recuperar el nombre del usuario
    $email = $_SESSION['email'];
    $sql = "SELECT nombre FROM usuarios WHERE email = '$email'";
    $result = $conexion->query($sql);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $nombre = $row['nombre'];

        // Mostrar el saludo
        echo "¡Hola, Bienvenido: $nombre!";
    } else {
        // Manejar caso donde el correo electrónico no corresponde a ningún usuario
        echo "¡Hola, Usuario!";
    }

    // Cerrar la conexión
    $conexion->close();
} else {
    // Si no hay una sesión de email, mostrar saludo genérico
    echo "¡Hola, Usuario!";
}
?>

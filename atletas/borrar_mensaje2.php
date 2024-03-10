<?php
session_start();

$host = "localhost"; 
$usuario = "root"; 
$contrasena = ""; 
$base_datos = "cross_army_fitness";

// Conexión a la base de datos
$conexion = mysqli_connect($host, $usuario, $contrasena, $base_datos);

// Verificar si la conexión fue exitosa
if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Verificar si se ha proporcionado un ID válido en la URL
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    // Obtener el id del mensaje a eliminar
    $id_mensaje = $_GET['id'];

    // Verificar si el mensaje pertenece al usuario actual
    $usuario_id = $_SESSION['id'];
    $query_verificacion = "SELECT * FROM mensajes WHERE id = $id_mensaje AND receptor_id = $usuario_id";
    $resultado_verificacion = mysqli_query($conexion, $query_verificacion);

    if (mysqli_num_rows($resultado_verificacion) > 0) {
        // El mensaje pertenece al usuario actual, se puede eliminar
        $query = "DELETE FROM mensajes WHERE id = $id_mensaje";
        $resultado = mysqli_query($conexion, $query);

        if ($resultado) {
               // Redireccionar a la página de perfil con un mensaje de éxito en el URL se mandan por get ojo solo funciona con sentencias if $result con sentencias stmt no funciona
            header('location: perfil  edit.php?mensaje=borrado_exitoso');
            exit(); // se cierra es importante cerrarlo
            
        } else {
            echo "Error al eliminar el mensaje: " . mysqli_error($conexion);
        }
    } else {
        echo "No tienes permiso para eliminar este mensaje.";
    }
} else {
    echo "ID de mensaje no válido.";
}

// Cerrar conexión
mysqli_close($conexion);
?>

<?php
// Iniciar sesión
session_start();

// Verificar si se recibieron los datos del formulario mediante POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar el email del usuario que inició sesión
    $email = $_SESSION['email'];
    

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

    // Obtener el ID del usuario basado en el correo electrónico
    $sql = "SELECT id FROM usuarios WHERE email = '$email'";
    $result = $conexion->query($sql);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $id_usuario = $row['id'];

        // Recuperar los datos del formulario de contacto
       
        $mensaje = $_POST["mensaje"];
        $tipo_mensaje = isset($_POST["tipo_mensaje"]) ? $_POST["tipo_mensaje"] : "Sin Especificación";

      


        // Preparar la consulta para insertar en la tabla contactanos
        $consulta = "INSERT INTO comentarios (usuario_id, mensaje, tipo_mensaje ) VALUES (?, ?, ?)";

        // Preparar la sentencia
        $stmt = $conexion->prepare($consulta);
        


        // Vincular los parámetros de la sentencia con los valores del formulario
        $stmt->bind_param("iss", $id_usuario,  $mensaje, $tipo_mensaje);

        // Ejecutar la consulta y mostrar mensajes de respuesta
        if ($stmt->execute()) {
           header('location: buzon.php?envio=mensaje_enviado_exitosamente');
        exit();
            $mensaje_contacto = "<p style='color: red; text-align:center;'>Error al enviar el mensaje: " . $conexion->error . "</p>";
        }

        // Cerrar la conexión
        $stmt->close();
    } else {
        // Manejar caso donde el correo electrónico no corresponde a ningún usuario
        $mensaje_contacto = "<p style='color: red; text-align:center;'>No se encontró un usuario con el correo electrónico proporcionado.</p>";
    }

    $conexion->close();
} else {
    echo "";
} 

?>
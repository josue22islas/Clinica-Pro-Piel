<?php
session_start();

$host = "localhost"; 
$usuario = "u990524785_josue_islas";
$contrasena = "Erik22isla_";
$base_datos = "u990524785_cross_army";

// Conexión a la base de datos
$conexion = mysqli_connect($host, $usuario, $contrasena, $base_datos);

// Verificar si la conexión fue exitosa
if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Obtener valores del formulario
$emisor_id = $_SESSION['id']; // Usamos el ID del usuario logeado
$receptor_id = $_POST["receptor"];
$contenido = $_POST["contenido"];

// Preparar la consulta con valores seguros (evita inyección SQL)
$query = "INSERT INTO mensajes (emisor_id, receptor_id, contenido, fecha_envio) VALUES (?, ?, ?, NOW())";

// Preparar la sentencia
if ($stmt = mysqli_prepare($conexion, $query)) {
    // Vincular variables a la sentencia como parámetros
    mysqli_stmt_bind_param($stmt, "iis", $emisor_id, $receptor_id, $contenido);

    // Ejecutar la sentencia
    if (mysqli_stmt_execute($stmt)) {
        header('location: perfil admin.php?envio=mensaje_enviado_exitosamente');
        exit();
    } else {
        echo "Error al enviar el mensaje: " . mysqli_error($conexion);
    }

    // Cerrar la sentencia
    mysqli_stmt_close($stmt);
} else {
    echo "Error en la preparación de la consulta";
}

// Cerrar conexión
mysqli_close($conexion);
?>

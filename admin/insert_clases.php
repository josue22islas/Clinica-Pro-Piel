<?php
$servidor = "localhost";
$usuario = "u990524785_josue_islas";
$contrasena = "Erik22isla_";
$basedatos = "u990524785_cross_army";

$conexion = new mysqli($servidor, $usuario, $contrasena, $basedatos);

if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $idUsuario = $_POST['ID_usuarios'];
    $fecha = $_POST['fecha'];
    $hora = $_POST['hora'];

    // Validación: Usuario ya tiene una reserva para ese horario y día
    $consulta_reserva = "SELECT * FROM agendar_clases WHERE ID_usuarios = ? AND fecha = ? AND hora = ?";
    $stmt_verificar = $conexion->prepare($consulta_reserva);
    $stmt_verificar->bind_param("iss", $idUsuario, $fecha, $hora);
    $stmt_verificar->execute();
    $resultado = $stmt_verificar->get_result();

    if ($resultado->num_rows > 0) {
        header ("location: reporte de clases.php?error4=Ya tienes una reserva para ese horario y día.");
        exit();
    }
    $stmt_verificar->close();

    // Validación: La clase está llena para ese horario y día
    $consulta_cantidad_reservas = "SELECT COUNT(*) as cantidad FROM agendar_clases WHERE fecha = ? AND hora = ?";
    $stmt_contar_reservas = $conexion->prepare($consulta_cantidad_reservas);
    $stmt_contar_reservas->bind_param("ss", $fecha, $hora);
    $stmt_contar_reservas->execute();
    $resultado_cantidad = $stmt_contar_reservas->get_result();

    if ($resultado_cantidad->num_rows > 0) {
        $fila_cantidad = $resultado_cantidad->fetch_assoc();
        $cantidad_reservas = $fila_cantidad['cantidad'];

        $limite_capacidad = 10; // Establecer el límite de capacidad

        if ($cantidad_reservas >= $limite_capacidad) {
            header ("location: reporte de clases.php?error3=Lo siento, la clase está llena para ese horario y día.");
            exit();
        }
    }
    $stmt_contar_reservas->close();

    
// Validación: Membresía activa del usuario
$consulta_membresia = "SELECT estatus, tipo_membresia FROM membresias WHERE usuario_id = ?";
$stmt_membresia = $conexion->prepare($consulta_membresia);
$stmt_membresia->bind_param("i", $idUsuario);
$stmt_membresia->execute();
$resultado_membresia = $stmt_membresia->get_result();

// Verificar si hay algún resultado de membresía para el usuario
if ($resultado_membresia->num_rows > 0) {
    $fila_membresia = $resultado_membresia->fetch_assoc();
    $estado_membresia = $fila_membresia['estatus'];
    $tipo_membresia = $fila_membresia['tipo_membresia'];

    if ($estado_membresia !== 'activo' || !in_array($tipo_membresia, ['Visita', 'Semanal', 'Mensual'])) {
        header ("location: reporte de clases.php?error=Lo siento, el atleta no tiene una membresía activa o válida para hacer reservas.");
        exit();
    }
} else {
    // Si no hay ninguna membresía registrada para el usuario, no permitir la reserva
     header ("location: reporte de clases.php?error2=Lo siento, el atleta no tiene ninguna membresía registrada para hacer reservas.");
    exit();
}

$stmt_membresia->close();






    // Si todas las validaciones pasan, procede con la inserción
    $sql = "INSERT INTO agendar_clases (ID_usuarios, fecha, hora, estatus) VALUES (?, ?, ?, 'activo')";
    $stmt = $conexion->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("iss", $idUsuario, $fecha, $hora);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            header ("location: reporte de clases.php?reservado=Clase reservada exitosamente.");
            exit();
        } else {
            echo "Error al reservar la clase.";
        }

        $stmt->close();
        $conexion->close();
    } else {
        echo "Error en la preparación de la consulta.";
    }
} else {
    echo "No se recibieron datos del formulario.";
}
?>

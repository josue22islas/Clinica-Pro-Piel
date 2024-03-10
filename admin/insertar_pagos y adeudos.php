<?php
// Iniciar sesión
session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
  header('Location: ../login.php');
  exit;
}



// Conexión a la base de datos (cambia los valores según tu configuración)
$servidor = "localhost";
$usuario = "u990524785_josue_islas";
$contrasena = "Erik22isla_";
$basedatos = "u990524785_cross_army";

$conexion = new mysqli($servidor, $usuario, $contrasena, $basedatos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

// Verificar si se recibieron los datos del formulario mediante POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $usuario_id = $_POST['usuario_id']; // Asegúrate de tener este campo en tu formulario
 
    $producto = $_POST['producto'];
    $precio = $_POST['precio'];
    $abono = $_POST['abono'];
    $deuda = $_POST['deuda'];
    $fecha_pago = $_POST['fecha_pago'];
    $estado = $_POST['estado'];
    $cantidad = $_POST['cantidad'];

    // Preparar la consulta para insertar el registro en la tabla pagos_adeudos
    $stmt = $conexion->prepare("INSERT INTO pagos_adeudos (usuario_id,  producto, precio, abono, deuda, fecha_pago, estado, cantidad) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("isdsssss", $usuario_id,  $producto, $precio, $abono, $deuda, $fecha_pago, $estado, $cantidad);

    if ($stmt->execute()) {
      header("location: reporte de pagos.php");
  } else {
      $mensaje = "Error al insertar el registro: " . $stmt->error;
  }
  $stmt->close();
  
}

$conexion->close();
?>
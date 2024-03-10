

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
   
    $producto = $_POST['producto'];
    $precio = $_POST['precio'];
    $abono = $_POST['abono'];
    $deuda = $_POST['deuda'];
    $fechaPago = $_POST['fecha_pago'];
    $estado = $_POST['estado'];

    // Actualizar los datos en la tabla
    $sql = "UPDATE pagos_adeudos SET  producto='$producto', precio=$precio, abono=$abono, deuda=$deuda, fecha_pago='$fechaPago', estado='$estado' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        header ("location: reporte de pagos.php");
    } else {
        echo "Error al actualizar el registro: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>

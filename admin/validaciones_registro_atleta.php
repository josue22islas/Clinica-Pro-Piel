
<?php

$mensajeRegistro = '';
$mensajeNombre = '';
$mensajeEmail = '';
$mensajeTelefono = '';

// Verificar si se recibieron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];
    $pais_codigo = $_POST['pais_codigo'];
    $telefono = $_POST['telefono'];

    // Convertir la primera letra de $nombre a mayúscula
    $nombre = ucfirst($_POST['nombre']);

    // Verificar si la contraseña contiene al menos una letra y un número
    if (!preg_match("/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/", $contraseña)) {
        header('location: reporte de atletas.php?error=error_password');
        exit();
       // $mensajeRegistro = "<div style='color: white; background-color:red; border-radius: 8px; text-align:center; padding: 9px;'>La contraseña debe contener al menos una letra y un número.</div>";
    } else {
        // Cifrar la contraseña antes de guardarla en la base de datos
        $contraseña_cifrada = password_hash($contraseña, PASSWORD_DEFAULT);

        // Obtener la fecha y hora actual
        $fecha_registro = date('Y-m-d H:i:s');

        // Datos de conexión a la base de datos
       $servername = "localhost";
       $username = "u990524785_josue_islas";
       $password = "Erik22isla_";
       $dbname = "u990524785_cross_army";

        // Intentar conectar a la base de datos
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Verificar la conexión
        if ($conn->connect_error) {
            die("Error en la conexión: " . $conn->connect_error);
        }

        // Verificar si el nombre ya existe
        $sql_verificar_nombre = "SELECT * FROM usuarios WHERE nombre = '$nombre'";
        $result_nombre = $conn->query($sql_verificar_nombre);

        if ($result_nombre->num_rows > 0) {
            header('location: reporte de atletas.php?error4=error_nombre');
            exit();
           // $mensajeNombre = "<div style='color: white; background-color:red; border-radius: 8px; text-align:center; padding: 9px;'>¡El nombre ya está en uso!</div>";
        }

        // Verificar si el email ya existe
        $sql_verificar_email = "SELECT * FROM usuarios WHERE email = '$email'";
        $result_email = $conn->query($sql_verificar_email);

        if ($result_email->num_rows > 0) {
            header('location: reporte de atletas.php?error3=error_email');
            exit();
            //$mensajeEmail = "<div style='color: white; background-color:red; border-radius: 8px; text-align:center; padding: 9px;'>¡El email ya está en uso!</div>";
        }

        // Verificar si el teléfono ya existe
        $sql_verificar_telefono = "SELECT * FROM usuarios WHERE telefono = '$telefono'";
        $result_telefono = $conn->query($sql_verificar_telefono);

        if ($result_telefono->num_rows > 0) {
            header('location: reporte de atletas.php?error2=error_telefono');
            exit();
            //$mensajeTelefono = "<div style='color: white; background-color:red; border-radius: 8px; text-align:center; padding: 9px;'>¡El teléfono ya está en uso!</div>";
        }

        // Si no hay mensajes de error, proceder con la inserción
        if (empty($mensajeNombre) && empty($mensajeEmail) && empty($mensajeTelefono)) {
            $sql = "INSERT INTO usuarios (nombre, email, contraseña, pais_codigo, telefono, fecha_registro) 
                    VALUES ('$nombre', '$email', '$contraseña_cifrada', '$pais_codigo', '$telefono', '$fecha_registro')";

            if ($conn->query($sql) === TRUE) {
                header('location: reporte de atletas.php?registro=registro_exitosamente');
                exit();
            } else {
                $mensajeRegistro = "<div style='color: white; background-color:red; border-radius: 8px; text-align:center; padding: 9px;'>Error al registrar: " . $conn->error . "</div>";
            }
        }

        // Cerrar la conexión a la base de datos
        $conn->close();
    }
}

?>
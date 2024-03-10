<?php
// Iniciar sesión
session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
    header('Location: ../login.php');
    exit;
}

error_reporting(0);

// Obtener la información del usuario desde la base de datos
require_once '../conex_db/conex_db.php';

$mensaje = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST["email"];
    $contraseña_actual = $_POST["contraseña_actual"];
    $nueva_contraseña = $_POST["nueva_contraseña"];
    $confirmar_contraseña = $_POST["confirmar_contraseña"];

    // Verificar si las contraseñas coinciden
    if ($nueva_contrasena === $confirmar_contrasena) {
        // Verificar si el correo y la contraseña actual son correctos
        $stmt = $conn->prepare("SELECT id, contraseña FROM usuarios WHERE email = ? AND rol = 'administrador'");
        $stmt->bind_param("s", $correo);
        $stmt->execute();
        $stmt->bind_result($usuario_id, $contraseña_hash);
        $stmt->fetch();
        $stmt->close();

        if ($usuario_id && password_verify($contraseña_actual, $contraseña_hash)) {
            // Cambiar la contraseña
            $nueva_contraseña_hash = password_hash($nueva_contraseña, PASSWORD_DEFAULT);
            $stmt = $conn->prepare("UPDATE usuarios SET contraseña = ? WHERE id = ?");
            $stmt->bind_param("si", $nueva_contraseña_hash, $usuario_id);
            $stmt->execute();
            $stmt->close();

              // Destruir la sesión actual
              session_destroy();

           header("location: ../login.php");
        } else {
          header("location: perfil admin.php?error=true");// en esta como se trabaja con conn muy efectivo 
          exit(); // Asegúrate de detener la ejecución después de la redirección
          //$mensaje = "<div class='alert alert-danger'>El correo o la contraseña actual son incorrectos.</div>";
        }
    } else {
      header("location: perfil admin.php?error=true");// en esta como se trabaja con conn muy efectivo 
      exit(); 
    }
}
?>

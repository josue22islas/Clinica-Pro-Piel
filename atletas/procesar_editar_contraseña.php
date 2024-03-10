<?php
// Obtener la información del usuario desde la base de datos
require_once '../conex_db/conex_db.php';

session_start(); // Inicia la sesión (si no lo has hecho ya)

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST["email"];
    $contraseña_actual = $_POST["contraseña_actual"];
    $nueva_contraseña = $_POST["nueva_contraseña"];
    $confirmar_contraseña = $_POST["confirmar_contraseña"];

    // Verificar si las contraseñas coinciden
    if ($nueva_contrasena === $confirmar_contrasena) {
        // Verificar si el correo y la contraseña actual son correctos
        $stmt = $conn->prepare("SELECT id, contraseña FROM usuarios WHERE email = ?");
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

           header("location: ../login.php");
        } else {
            echo "El correo o la contraseña actual son incorrectos.";
        }
    } else {
        echo "Las contraseñas no coinciden.";
    }
}
?>

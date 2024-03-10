

<?php

// Iniciar sesión
session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
    header('Location: ../login.php');
    exit;
}

// Obtener la información del usuario desde la base de datos
require_once '../conex_db/conex_db.php';

// Obtener información del usuario
$email = $_SESSION['email'];
$sql = "SELECT * FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $userInformation = $result->fetch_assoc();
} else {
    echo "Usuario no encontrado";
}

require_once '../conex_db/conex_db.php';

// Obtener el usuario_id desde la sesión
$usuario_id = $userInformation['id']; // Suponiendo que el campo de ID en tu tabla es 'id'

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"];

    if (!empty($_FILES["imagen"]["tmp_name"]) && file_exists($_FILES["imagen"]["tmp_name"])) {
        $tipoImagen = $_FILES["imagen"]["type"];
        $tamanioImagen = $_FILES["imagen"]["size"];

        // Verificar el tipo de imagen
        $allowedTypes = array("image/png", "image/jpeg");
        if (!in_array($tipoImagen, $allowedTypes)) {
            header("location: galeria de admin.php?error=Solo+se+permite+imágenes+en+formato+PNG+y+JPG");//mandar el mensaje por el metodo get 
            exit(); // Asegúrate de salir después de redirigir
           // $mensaje = "Solo se permiten imágenes en formato PNG y JPG.";
        } elseif ($tamanioImagen > 5242880) { // 5MB en bytes
            header("location: galeria de admin.php?error=La+imagen+es+demasiado+grande.+El+tamaño+máximo+permitido+es+5MB.");//mandar el mensaje por el metodo get 
            exit(); // Asegúrate de salir después de redirigir
           // $mensaje = "La imagen es demasiado grande. El tamaño máximo permitido es 5MB.";
        } else {
            $imagen = file_get_contents($_FILES["imagen"]["tmp_name"]);

            $sql = "INSERT INTO galeria (usuario_id, nombre, imagen) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("iss", $usuario_id, $nombre, $imagen);

            if ($stmt->execute()) {
                  // Guardar mensaje en sesión
                  $_SESSION['imagen_subida_correctamente'] = true;//solo funciona con sentencias stmt ojocon eso
                  header("location: galeria de admin.php");
                  exit(); // Asegaromoss  de salir después de redirigir
            } else {
                $mensaje = "Error al subir la imagen: " . $stmt->error;
            }
            

            $stmt->close();
        }
    } else {
        $mensaje = "No se ha seleccionado ninguna imagen.";
    }
}

$email = $_SESSION['email'];
$sql = "SELECT * FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $userInformation = $result->fetch_assoc();
} else {
    echo "Usuario no encontrado";
}

$conn->close();
?>


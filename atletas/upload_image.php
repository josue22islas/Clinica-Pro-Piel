<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

        <!--Contenido arrogado CDN de un servidos de boostrap-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  
</head>
<body>
    


<?php

session_start();

echo "<!DOCTYPE html>";
echo "<html>";
echo "<head>";
echo "<title>Título de tu página</title>";
echo "<style>";
echo "body { background-color: rgba(0, 0, 0, 0.5); }"; // Fondo oscuro semitransparente
echo "</style>";
echo "</head>";
echo "<body>";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cross_army_fitness";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if (isset($_SESSION['email'])) {
    $email = $_SESSION['email'];

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['imagen'])) {
        
        $imagen = $_FILES['imagen'];

        // Verificar si se subió un archivo
        if ($imagen['error'] !== UPLOAD_ERR_OK) {
            header("location: img perfil.php?error=Error+al+subir+la+imagen.");//mandar el mensaje por el metodo get 
          
           
    exit();
        }

        // Comprobar el tipo de archivo (permitiendo solo imágenes)
        $allowed_types = array('image/jpeg', 'image/png', 'image/gif');
        if (!in_array($imagen['type'], $allowed_types)) {
            header("location: img perfil.php?error=Solo+se+permite+imágenes+en+formato+PNG,+JPG+y+GIFT");//mandar el mensaje por el metodo get 
            exit();
        }

        // Verificar el tamaño del archivo (por ejemplo, 20MB)
        $max_size = 20 * 1024 * 1024; // 20MB
        if ($imagen['size'] > $max_size) {
            header("location: img perfil.php?error=La+imagen+es+demasiado+grande.+El+tamaño+máximo+permitido+es+20MB.");//mandar el mensaje por el metodo get 
            exit();
        }
        
        $imagen_data = file_get_contents($imagen['tmp_name']);
        $imagen_data = $conn->real_escape_string($imagen_data);

        $sql = "UPDATE usuarios SET imagen='$imagen_data' WHERE email='$email'";
        if ($conn->query($sql) === TRUE) {
            header("Location: perfil  edit.php");
        } else {
            echo "Error: " . $conn->error;
        }

        $conn->close();
    } else {
        header("Location: perfil  edit.php");
        exit();
    }
} else {
    header("Location: ../login.php");
    exit();
}

?>

</body>
</html>
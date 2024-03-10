<?php

session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
    header('Location: login.php'); // Cambia la ruta de acuerdo a tu estructura de carpetas
    exit;
}


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cross_army_fitness";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['id'])) {
    $id = $_GET['id'];

     // Crear un archivo de Word borralo si no deseas que descarge el archivo
     header("Content-Type: application/vnd.ms-word");
    header("Content-Disposition: attachment; filename=comprobante_pago_$id.doc");
 

    $sql = "SELECT * FROM pagos_adeudos WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Aquí puedes mostrar los detalles del comprobante

      // Obtener el nombre del usuario asociado al usuario_id
      $usuario_id = $row['usuario_id'];
      $sql_usuario = "SELECT nombre FROM usuarios WHERE id = ?";
      $stmt_usuario = $conn->prepare($sql_usuario);
      $stmt_usuario->bind_param("i", $usuario_id);
      $stmt_usuario->execute();
      $result_usuario = $stmt_usuario->get_result();

      if ($result_usuario->num_rows > 0) {
          $usuario = $result_usuario->fetch_assoc();
          $nombre_usuario = $usuario['nombre'];
      } else {
          $nombre_usuario = "Nombre no encontrado";
      }

  
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

      <!--Contenido arrogado CDN de un servidos de boostrap-->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    
    <link rel="icon" href="../icon/icon.ico">
    
     <!--CDN de font Awesome-->

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<style>



</style>
</head>
<body><br><br><br>
    

 
 <div class="container" style="border: 4px solid green; padding:18px;">

    <div class="header"><br>
      <h1>Comprobante de Pago</h1>
    </div><br>
    <div class="invoice-details">
      <p><strong>Fecha de pago:</strong> <?php echo $row['fecha_pago']; ?></p>
     <p style="line-height:4px;"><strong>Cliente:</strong> <?php echo $nombre_usuario; ?></p>
     <p style="border: 1px solid grey; text-align:center;">Detalle del pago</p>
    </div>
    <table class="table">
      <thead>
        <tr class="text-left">
          <th>Nombre del producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Abono</th>
          <th>Deuda</th>
       
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <?php echo $row['producto']; ?></td>
          <td> <?php echo $row['cantidad']; ?></td>
          <td> $<?php echo $row['precio']; ?></td>
          <td> $<?php echo $row['abono']; ?></td>
          <td> $<?php echo $row['deuda']; ?></td>
        </tr>
       
      </tbody>
    </table><br><br>
    <div class="total">
      <p><strong>Total a pagar:</strong> $<?php echo $row['deuda']; ?></p>
      <p><strong>Pagastes:</strong> $<?php echo $row['abono']; ?></p>
      <p><strong>Estado:</strong> <?php echo $row['estado']; ?></p>
    </div>
    <br>

   
<h3 style="text-align:center;"><b>"¡Agradecemos tu preferencia!"</b></h3><hr>

    <p>Gracias por comprar en nuestra línea de productos que Cross Army Fitness ofrece para ti, 
 Agradeciendo tu preferencia, nos mantenemos actualizados y enfocados en atenderte como mereces, nos interesa tu opinión en caso de duda o queja llama al: (+52) 755 111 7665 o visitanos en la 
Avenida Paseo Zihuatanejo Oriente, Fracc el Hujal 40880 Zihuatanejo, GRO, M</p>
  </div>



<?php


  
    } else {
        echo "Producto no encontrado.";
    }
} else {
    echo "Acceso no autorizado.";
}

$conn->close();
?>



</body>
</html>



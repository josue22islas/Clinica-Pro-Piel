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

$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Contenido arrogado CDN de un servidos de boostrap-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

    
     <!--CDN de font Awesome-->

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">


  
   <link rel="stylesheet" href="css/body cross.css">
   <title>Cross Army Fitness</title>

 <link rel="icon" href="icon/icon.ico">
 
<style>
 


.navbar-logo {
  width: 45px; /* Ajusta el tamaño de la imagen*/
  height: 45px;
  border-radius: 50%; /* Esto hace que la imagen tenga forma de círculo */
  margin-right: 10px; /* Ajusta el espacio entre la imagen y el texto del navbar */
}

body {
    margin: 0;
    padding: 0;
    background-image: url("../img/de2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed; /* Fija la imagen de fondo */
    background-size: 100% 100%; /* Ajusta el tamaño de la imagen */
  
}

.profile-image img {
        max-width: 100%; /* Asegura que la imagen no exceda el tamaño del contenedor */
        max-height: 350px; /* Define una altura máxima para la imagen */
        width: auto; /* Permite que la imagen se ajuste al ancho máximo establecido */
        height: auto; /* Permite que la imagen se ajuste a la altura máxima definida */
    }
</style>

</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
 <img src="img/cross.jpg" alt="Logo" class="navbar-logo">
    <a class="navbar-brand" style="color:rgb(247, 199, 26); background-color: rgb(22, 53, 175); border-radius: 7px; padding: 0 10px;" href="#">Cross Army Fitness</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="container-fluid"> 
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="inicio.php"><i class="fas fa-home"></i>/Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="perfil  edit.php"><i class="fas fa-user" style="color: #ffffff;"></i></i>/Mi Perfil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="productos.php"><i class="fas fa-cart-plus" style="color: #ffffff;"></i></i>/Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="clases.php"><i class="fas fa-calendar-check" style="color: #edf1f7;"></i>/Clases</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pagos y adeudos.php"><i class="fas fa-hand-holding-usd" style="color: #f7f7f8;"></i>/Pagos y Adeudos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-star" style="color: #ffffff;"></i>/Membresías</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="buzon.php"><i class="fas fa-envelope" style="color: #ffffff;"></i>/Quejas y Sugerencias</a>
              </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false"><i class="fas fa-cog" style="color: #ffffff;"></i>
                /Más Opciones
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="notificaciones.php"><i class="fas fa-bell" style="color: black;"></i>/Notificaciones</a>
                <a class="dropdown-item" href="#"><i class="fas fa-cog" style="color: black;"></i>/Configuracion</a>
                <a class="dropdown-item" href="cerrar sesion.php"><i class="fas fa-sign-out-alt" style="color: black;"></i>/Cerrar sesión</a>
              </div>
            </li>
          </ul>
        </div>
      </nav><br><br><br><br>






      <div class="container col-sm-8" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;">
       
    
       <div class="container-responsive" >
     <div class="row">
         <div class="col-12 text-center"> <br><br>
             <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Editar Imagen</h1><hr>
         </div>
     </div>
 
     <div class="row justify-content-center">
         <div class="col-md-8 col-sm-12 text-center">
             <h2 class="dashboard-heading">¡Bienvenido: <?php echo $userInformation['nombre']; ?>! Cambia tu foto de perfil</h2><br>
 
             <div class="profile-image">
               <?php if (!empty($userInformation['imagen'])) : ?>
                        <img src='data:image/jpeg;base64,<?= base64_encode($userInformation['imagen']) ?>' alt='Imagen de Perfil' class="img-fluid"><!--la clase nos ayuda a hacer adaptable la imagen class="img-fluid"-->
                    <?php else : ?>
                      <div style="display: flex; justify-content: center; align-items: center; height: 350px; background-color: #ccc;">
                         <i class="fas fa-camera fa-8x"></i><!-- icono y estilos para centrar  cuando el contenedor este vacio-->
                      </div>
                    <?php endif; ?>
             </div>
 
             <form action="upload_image.php" method="post" enctype="multipart/form-data">
            <br>
<div class="custom-file">
    <input type="file" class="custom-file-input" name="imagen" id="imagen" accept="image/*" required>
    <label class="custom-file-label" for="imagen" id="custom-file-label">Cargar imagen</label>
    
    <?php
               if (isset($_GET['error'])) {
                $error = $_GET['error'];
                // Puedes mostrar este mensaje donde quieras en tu página HTML recibirlos por el metodo get imprimirlos
                echo '<div class="m-0 row justify-content-center"><p class="alert alert-danger col-12 text-center">' . $error . '</p></div>';
              }
          ?>
   
</div>

<div id="imagenNombre" class="mt-2"></div>

<script>
  ///codigo de javascript para cargar la imagen y nos proporcione el nombre de la imagen de una manera mas adaptable y presentable
    document.getElementById('imagen').addEventListener('change', function() {
        var input = this;
        var label = document.getElementById('custom-file-label');
        var labelText = label.innerHTML;
        var files = input.files;

        if (files && files.length === 1) {
            labelText = files[0].name;
        } else if (files && files.length > 1) {
            labelText = files.length + ' archivos seleccionados';
        }

        label.innerHTML = labelText;
        var imagenNombre = document.getElementById('imagenNombre');
        imagenNombre.innerHTML = 'Nombre del archivo: ' + labelText;
    });
</script>
<br>

                 <input type="submit" value="Cargar imagen" class="btn btn-success">

                 <button type="button" class="btn btn-danger" onclick="window.location.href='perfil  edit.php'">Cancelar Cambios</button>

<br><br><br>

                
                 </div>   </div>   </div>   </div>  
      
       <!-- Footer-->
  <br><br><br>
  <footer class="footer bg-dark text-white text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <br>
          <p>Email: info@crossarmyfitness.com</p>
          <p>Teléfono: (555) 123-4567</p>
          <p>Dirección: Mexicas 1, Progreso, 40894 Zihuatanejo, Gro.</p>
        </div>
       
         
        </div>
      </div>
      <hr>
      <span>&copy; Cross Army Fitness - <?php echo date("Y"); ?></span>
      <div>
        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>





</body>
</html>
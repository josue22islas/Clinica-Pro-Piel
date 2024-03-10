<?php
session_start();
require_once '../conex_db/conex_db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT nombre, imagen FROM galeria WHERE id = $id";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $nombre = $row["nombre"];
        $imagen = base64_encode($row["imagen"]);
    } else {
        echo "Imagen no encontrada.";
        exit;
    }
} else {
    echo "ID de imagen no especificado.";
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Imagen</title>
      <!--Contenido arrogado CDN de un servidos de boostrap-->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  

    <link rel="icon" href="../icon/icon.ico">
    
     <!--CDN de font Awesome-->

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

   <style>
   /* Estilos adicionales */
   .img-fluid {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
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

.navbar-logo {
  width: 45px; /* Ajusta el tamaño de la imagen*/
  height: 45px;
  border-radius: 50%; /* Esto hace que la imagen tenga forma de círculo */
  margin-right: 10px; /* Ajusta el espacio entre la imagen y el texto del navbar */
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
              <a class="nav-link" href="perfil  edit.php"><i class="fas fa-user-shield" style="color: #ffffff;"></i></i>/Mi Perfil</a>
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
                <a class="nav-link" href="membresia.php"><i class="fas fa-star" style="color: #ffffff;"></i>/Membresías</a>
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


      
      <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="container" style="background-color: rgba(255, 255, 255, 0.9); border-radius: 10px; padding: 20px;">
                    <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Editar Imagen</h1><hr>
                    <form action="guardar_edicion.php" method="post">
                        <input type="hidden" name="id" value="<?php echo $id; ?>">
                        <div class="form-group">
                            <label for="nombre">Nuevo nombre:</label>
                            <input type="text" id="nombre" name="nombre" class="form-control" value="<?php echo $nombre; ?>">
                        </div>
                        <div class="form-group text-center">
                            <img src="data:image/jpeg;base64,<?php echo $imagen; ?>" alt="<?php echo $nombre; ?>" class="img-fluid">
                        </div>
                        <div class="row justify-content-center">
                        <button type="submit" class="btn btn-primary ">Guardar Cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
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
  
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>
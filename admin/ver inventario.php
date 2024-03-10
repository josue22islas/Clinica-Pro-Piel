<?php
session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
    header('Location: login.php');
    exit;
}
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Contenido arrogado CDN de un servidos de boostrap-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  

    <link rel="icon" href="../icon/icon.ico">
    
     <!--CDN de font Awesome-->

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">


   <link rel="stylesheet" href="css/body cross.css">

   <title>Cross Army Fitness</title>

   <style>
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
              <a class="nav-link" href="perfil admin.php"><i class="fas fa-user-shield"></i>/Mi Perfil <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="productos admin.php"><i class="fas fa-cart-plus" style="color: #ffffff;"></i></i>/Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="reporte de clases.php"><i class="fas fa-calendar-check" style="color: #edf1f7;"></i>/Clases</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="reporte de pagos.php"><i class="fas fa-hand-holding-usd" style="color: #f7f7f8;"></i>/Pagos y Adeudos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="consulta de membresias.php"><i class="fas fa-star" style="color: #ffffff;"></i>/Membresías</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="reporte de atletas.php"><i class="fas fa-dumbbell" style="color: #ffffff;"></i>/Atletas</a>
              </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false"><i class="fas fa-cog" style="color: #ffffff;"></i>
                /Más Opciones
              </a>
              <div class="dropdown-menu">
              <a class="dropdown-item" href="notificaciones admin.php"><i class="fas fa-bell" style="color: black;"></i>/Notificaciones</a>
                <a class="dropdown-item" href="Inventario crosfit.php"><i class="fas fa-boxes" style="color: black;"></i>/Inventario</a>
                <a class="dropdown-item" href="#"><i class="fas fa-cog" style="color: black;"></i>/Configuracion</a>
                <a class="dropdown-item" href="cerrar sesion.php"><i class="fas fa-sign-out-alt" style="color: black;"></i>/Cerrar sesión</a>
              </div>
            </li>
          </ul>
        </div>
      </nav><br><br>
<?php /// aqui va la logica de nuestro contenedor del perfil
$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

// Verificar si se ha enviado el ID del producto
if(isset($_GET['id'])) {
    $id = $_GET['id'];

    // Construir consulta SQL para obtener la información del producto
    $sql = "SELECT * FROM inventario WHERE id = $id";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $nombre = $row["nombre"];
        $marca = $row["marca"];
        $cantidad = $row["cantidad"];
        $peso = $row["peso"];
        $imagen = base64_encode($row["imagen"]);
        $precio = $row["precio"];

      
    } else {
        echo "No se encontró el producto con ese ID";
    }
} else {
    echo "No se proporcionó un ID de producto";
}

$conn->close();
?>





<div class="container col-sm-10" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;">
 <div class="container mt-5"><br><br>
        <div class="row">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                    <?php if (!empty($row['imagen'])) : ?>
                        <img src='data:image/jpeg;base64,<?= base64_encode($row['imagen']) ?>' alt='Imagen de Perfil' width='220' height='250'>
                    <?php else : ?>
                        <div class="fas fa-camera fa-5x d-flex justify-content-center align-items-center" style="width: 266px; height: 150px; background-color: #ccc;"></div>
                    <?php endif; ?>
                        <h5 class="my-3">Imagen del producto</h5>
                      
                        <div class="d-flex justify-content-center mb-2">
                      <div>
                        <p></p><br>
                      </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-4 mb-lg-0" style="display:none;"> <!-- display para ocultar el contenedor -->
                    <div class="card-body p-0">
                        <ul class="list-group list-group-flush rounded-3">
                            <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                            <a href="#!"><i class="fas fa-envelope" style="color: #186bfb;"></i></a>
                                <p class="mb-0">Cross Army Fitness</p>
                                <div class="d-flex justify-content-start">
                                    
                    </div>
                    
                    

                      </li>
                            <!-- Agregar más elementos de la lista según tu necesidad -->
                        </ul>
                    </div>
                </div>
            </div>
           
            
            
            <div class="col-lg-8">
                <div class="card mb-4">
                    <div class="card-body">


                    <div class="row">
                            <div class="col-sm-10">
                            <h2 class="mb-0 text-muted">Información del material</h2>
                        </div>
                      </div>
                        <hr>

                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Nombre:</p>
                            </div>
                            <div class="col-sm-9">
                            <?php echo empty($row['nombre']) ? '<p class="text-muted mb-0">Ingrese información <i class="fas fa-edit"></i></p>' : '<p class="text-muted mb-0">' . $row['nombre'] . '</p>'; ?>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Marca:</p>
                            </div>
                            <div class="col-sm-9">
                            <?php echo empty($row['marca']) ? '<p class="text-muted mb-0">Ingrese información <i class="fas fa-edit"></i></p>' : '<p class="text-muted mb-0">' . $row['marca'] . '</p>'; ?>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Cantidad:</p>
                            </div>
                            <div class="col-sm-9">
                            <?php echo empty($row['cantidad']) ? '<p class="text-muted mb-0">Ingrese información <i class="fas fa-edit"></i></p>' : '<p class="text-muted mb-0">' . $row['cantidad'] . '</p>'; ?>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Peso:</p>
                            </div>
                            <div class="col-sm-9">
                            <?php echo empty($row['peso']) ? '<p class="text-muted mb-0">Ingrese información <i class="fas fa-edit"></i></p>' : '<p class="text-muted mb-0"> ' . $row['peso'] . ' Kg </p>'; ?>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Estado de equipo:</p>
                            </div>
                            <div class="col-sm-9">
                            <?php echo empty($row['estado_del_equipo']) ? '<p class="text-muted mb-0">Ingrese información <i class="fas fa-edit"></i></p>' : '<p class="text-muted mb-0">' . $row['estado_del_equipo'] . '</p>'; ?>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Precio:</p>
                            </div>
                            <div class="col-sm-9">
                            <?php echo empty($row['precio']) ? '<p class="text-muted mb-0">Ingrese información <i class="fas fa-edit"></i></p>' : '<p class="text-muted mb-0"> $ ' . $row['precio'] . ' MXN </p>'; ?>
                            </div>
                        </div>
                        <hr>
                      
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Fecha de registro:</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0"><?php echo $row['fecha_registro']; ?></p>
                            </div>
                        </div><hr>
                        <?php

          echo "<a style='text-decoration:none;' class='text-white' href='editar inventario.php?id=".$row['id']."'>
          <button class='btn btn-primary' type='button'>Editar
           </a></button>";

      echo "<a style='text-decoration:none;' class='text-white' href='Inventario crosfit.php''>
          <button class='btn btn-success' type='button'>Regresar
           </button></a>";


?>
                  



 
                        <!-- Agregar más detalles según tu necesidad   <div class="text-center"><a  href="restablecer email y password.php">Restablecer correo y contrasena</a></div> -->
                    </div>
                </div>
                <!-- Agregar más tarjetas o detalles según tu necesidad -->

             </div>
          </div>
      </div><br>
      </div>

     


  
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
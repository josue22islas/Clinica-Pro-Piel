<?php
session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
    header('Location: login.php'); // Cambia la ruta de acuerdo a tu estructura de carpetas
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


  
  
   <title>Cross Army Fitness</title>

   <style>
      body {
    margin: 0;
    padding: 0;
     /* background-color: rgb(228, 228, 223);*/  
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

  
  /* Deshabilitar hover en la primera fila del encabezado */
  .table thead tr:first-child th {
    pointer-events: none;
    background-color: initial;
}

.table-responsive {
  overflow-x: auto; /* Agrega desplazamiento horizontal si es necesario */
  white-space: nowrap; /* Evita que los elementos se envuelvan en múltiples líneas */
}

.responsive-text {
  -webkit-text-stroke: 2px black;
  color: transparent;
  text-shadow: 0px 4px 4px #282828;
  font-size: 2.5em; /* Tamaño del texto para pantallas normales */

  /* Media Query para dispositivos móviles */
  @media only screen and (max-width: 600px) {
    font-size: 2.0em; /* Tamaño del texto para pantallas más pequeñas */
  }
}

.gradient-custom {
/* fallback for old browsers */
background: #f6d365;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))
}


.elemt{

  /* Media Query para dispositivos móviles */
  @media only screen and (max-width: 600px) {
    font-size: 1.4em; /* Tamaño del texto para pantallas más pequeñas */
  }
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

      <div class="container col-sm-11" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;"><br>



<div class="container col-lg-10">

<h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Pagos y Adeudos</h1><hr>


    <br>
    

    <?php

// Conexión a la base de datos (cambia los valores según tu configuración)
$servidor = "localhost";
$usuario = "root";
$contrasena = "";
$basedatos = "cross_army_fitness";

$conexion = new mysqli($servidor, $usuario, $contrasena, $basedatos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

// Recuperar el ID del atleta basado en el correo electrónico
$email = $_SESSION['email'];
$sql = "SELECT id FROM usuarios WHERE email = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();
    $id_usuarios = $row['id'];

    // Consulta para obtener
    $consulta = $conexion->prepare("SELECT id, producto, precio, cantidad, abono, deuda, fecha_pago, estado, fecha_creacion
                                    FROM pagos_adeudos
                                    WHERE usuario_id = ?");
    $consulta->bind_param("i", $id_usuarios);
    $consulta->execute();
    $resultado = $consulta->get_result();

    // Iterar sobre los resultados y mostrar la información en la plantilla
    while ($fila = $resultado->fetch_assoc()) {
        // Aquí empieza la sección de la plantilla
        ?>
        <!-- Estructura HTML para mostrar los datos -->
       <!-- Estructura HTML para mostrar los datos -->
       <div class="card mb-3 alert alert-secondary " style="border-radius: .5rem;  background: #efefbb;   background: -webkit-linear-gradient(to right, #efefbb, #d4d3dd); background: linear-gradient(to right, #efefbb, #d4d3dd);">
            <div class="row g-0">
                <div class="col-md-4 gradient-custom text-center text-dark"
                    style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                    <img src="#########" alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
                    <h5><?php echo $fila['producto']; ?></h5>
                    <p>Cross Army Fitness</p>
                </div>
                <div class="col-md-8">
                    <div class="card-body p-4">
                        <h3 class="elemt" >Comprobante de pago</h3>
                        <hr class="mt-0 mb-4">
                        <div class="row pt-1">
                            <div class="col-6 mb-3">
                                <h6>Producto:</h6>
                                <p class="text-muted"><?php echo $fila['producto']; ?></p>
                            </div>
                            <div class="col-6 mb-3">
                                <h6>Precio:</h6>
                                <p class="text-muted"><?php echo $fila['precio']; ?></p>
                            </div>
                           <div class="col-6 mb-3">
                                <h6>Cantidad:</h6>
                                <p class="text-muted"><?php echo $fila['cantidad']; ?></p>
                            </div>
                          </div>
                        <hr class="mt-0 mb-4">
                        <div class="row pt-1">
                            <div class="col-6 mb-3">
                                <h6>Abono</h6>
                                <p class="text-muted"><?php echo $fila['abono']; ?></p>
                            </div>
                            <div class="col-6 mb-3">
                                <h6>Fecha de pago:</h6>
                                <p class="text-muted"><?php echo $fila['fecha_pago']; ?></p>
                            </div>
                            <div class="col-6 mb-3">
                                <h6>Estado:</h6>
                                <p class="text-muted"><?php echo $fila['estado']; ?></p>
                            </div>
                            <div class="col-6 mb-3">
                                <h6>Fecha de creacion:</h6>
                                <p class="text-muted"><?php echo $fila['fecha_creacion']; ?></p>
                            </div>
                        </div>
                        <div class="row pt-3">
                            <div class="col-6">
                                <a href="ver_comprobante.php?id=<?php echo $fila['id']; ?>" class="btn btn-primary col-lg-6"><i class="fas fa-eye"></i> Ver</a>
                            </div>
                            <div class="col-6">
                                <a href="comprobante_pago.php?id=<?php echo $fila['id']; ?>" class="btn btn-primary col-lg-6"><i class="fas fa-file-word"></i> Exportar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fin de la estructura HTML para mostrar los datos -->
        <?php
        // Aquí termina la sección de la plantilla

        
    }
} else {
  
    // Manejar caso donde el correo electrónico no corresponde a ningún usuario
    $id_usuarios = null; // Asigna un valor nulo al ID para mostrar un mensaje de error
}


  echo "<div class='container m-0 row justify-content-center col-12'>";
     echo "<div class='alert alert-secondary col-12 text-center'>Historial vacio.</div>";
     echo "</div>";
     echo "<br>";
      echo "<div class='container col-12 m-0 row justify-content-center'> <i class='fas fa-hand-holding-usd fa-4x'></i></div><br>";

  


$conexion->close();
?>
</div>




<!-- Modal -->
<div id="modalComprobante" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <iframe id="iframeComprobante" frameborder="0" width="100%" height="500px"></iframe>
  </div>
</div><br><br>

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


  <script>
document.addEventListener('DOMContentLoaded', function() {
    var botonesCambiarEstado = document.querySelectorAll('.cambiar-estado');

    botonesCambiarEstado.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el botón se ejecute de inmediato

            var id = this.getAttribute('data-id'); // Obtener el ID del elemento a cambiar de estado
            var confirmarCambio = document.getElementById('confirmarCambio');
            
            confirmarCambio.setAttribute('href', 'ver_comprobante.php?id=' + id);
            $('#confirmacionModal').modal('show'); // Mostrar el modal
        });
    });
});
</script>
  
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>


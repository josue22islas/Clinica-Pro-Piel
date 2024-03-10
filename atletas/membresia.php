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
    /*font-family:sans-serif;*/
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


.date-container {
  display: flex;
  justify-content: space-between;
}

.fecha-inicio,
.fecha-vencimiento {
  flex-basis: 50%;
}

.card {
      transition: transform 0.3s, border-color 0.3s;
      border: 3px solid blue;
      font-family:sans-serif;
      border-radius: 8px;
      padding: 15px;
      color:white;
      text-align: center;
      background: #8E2DE2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      
    }

    /* Estilo cuando se pasa el cursor (hover) */
    .card:hover {
      transform: scale(1.05); /* Aumenta el tamaño al 105% */
      border-color: yellow; /* Cambia el color del borde */
      

    }



.responsive-text {
  -webkit-text-stroke: 2px black;
  color: transparent;
  text-shadow: 0px 4px 4px #282828;
  font-size: 2.5em; /* Tamaño del texto para pantallas normales */

  /* Media Query para dispositivos móviles */
  @media only screen and (max-width: 600px) {
    font-size: 1.8em; /* Tamaño del texto para pantallas más pequeñas */
  }
}

/* forzar la aparición permanente de la barra de desplazamiento sin que afecte el tamaño del contenido cuando el modal está activo*/
body.modal-open {
  padding-right: 0 !important;
  overflow: auto !important;
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
     <!--incluimos el id de sesiones para dar la bienvenida al usuario logeado--->


      <div class="container text-center">
    <h1 class="responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">MEMBRESÍAS </h1><hr><br>
  
    <div class="row justify-content-center">

        <div class="col-md-4 my-2">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-white"><b>PLAN DE MEMBRESÍA</b> <br><span class="text-warning"> "VISITA"</span></h4>   
                   <p class="text-white" style="font-size:48px;"><sup style="font-size:27px;">$</sup>50<span style="font-size:17px;">por dia*</span></p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Acceso a una sesión de entrenamiento durante la visita.</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Interactuar con otros miembros del gimnasio</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Acceso ilimitado a las instalaciones</p>
                    <p class="card-text"><i class="fas fa-times" style="color:red;"></i> Participación en cualquier clase grupal programada</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Acceso a equipos</p>
                    <p class="card-text"><i class="fas fa-times" style="color:red;"></i> Una evaluación de aptitud física </p>
                    <a href="#" data-toggle="modal" data-target="#exampleModalCenter" class="btn btn-warning">¡Más información!</a>
                </div>
            </div>
        </div>

        <div class="col-md-4 my-2">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-white"><b>PLAN DE MEMBRESÍA</b> <span class="text-warning">"SEMANAL"</span></h4>
                    <p class="text-white" style="font-size:48px;"><sup style="font-size:27px;">$</sup>200<span style="font-size:17px;">por semana*</span></p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Acceso a varias sesionrd de entrenamiento durante la semana.</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Interactuar con otros miembros del gimnasio</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Acceso ilimitado a las instalaciones</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Participación en cualquier clase grupal programada</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Acceso a equipos</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Una evaluación de aptitud física </p>
                    <a href="#" data-toggle="modal" data-target="#exampleModalCenter" class="btn btn-warning">¡Más información!</a>
                </div>
            </div>
        </div>

        <div class="col-md-4 my-2">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title text-white"><b>PLAN DE MEMBRESÍA</b> <span class="text-warning">"MENSUAL"</span></h4>
                    <p class="text-white" style="font-size:48px;"><sup style="font-size:27px;">$</sup>400<span style="font-size:17px;">por mes*</span></p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Acceso a varias sesiones de entrenamiento durante el mes.</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Interactuar con otros miembros del gimnasio</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Acceso ilimitado a las instalaciones</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Participación en cualquier clase grupal programada</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Acceso a equipos</p>
                    <p class="card-text"><i class="fas fa-check" style="color:yellow;"></i> Una evaluación de aptitud física </p>
                    <a href="#" data-toggle="modal" data-target="#exampleModalCenter" class="btn btn-warning">¡Más información!</a>
                </div>
            </div>
        </div>

    </div>
</div>

 <br><hr>
 <br>  
 
 
  <!----nuestro modal para agregar un texto informativo ---->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header ">
        <h5 class="modal-title" id="exampleModalLongTitle">Información</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-justify  ">
        <b>¡Saludos familia Cross Army Fitness!<hr></b>
        
        Queremos informarte que nuestras membresías son exclusivamente adquiribles en nuestro establecimiento. Visítanos para adquirir uno de nuestros planes y experimentar un entrenamiento de alta calidad. Obtenen tu membresía para acceder a beneficios únicos. ¡Te esperamos para que te unas a la comunidad de Cross Army Fitness!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
       
      </div>
    </div>
  </div>
</div>
            
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


      $campo_usuario_id = "usuario_id"; // Puedes cambiar esto según el nombre real del campo en tu base de datos

  
      // Consulta para obtener el nombre del usuario en la tabla  realizar una JOIN entre las tablas membresias y usuarios solo de estaus activo la membresia
      $consulta = $conexion->prepare("SELECT m.id, m.tipo_membresia, m.precio, m.fecha_inicio, m.fecha_termino, u.nombre, u.email
                                FROM membresias m
                                JOIN usuarios u ON m.usuario_id = u.id
                                WHERE u.id = ? AND m.estatus = 'activo'");

      $consulta->bind_param("i", $id_usuarios);
      $consulta->execute();
      $resultado = $consulta->get_result();
  } else {
      // Manejar caso donde el correo electrónico no corresponde a ningún usuario
      $id_usuarios = null; // Asigna un valor nulo al ID para mostrar un mensaje de error
  }
  
  $conexion->close();
  ?>
  

  
  
  <?php
  // Verificar si se obtuvieron resultados
  if (isset($resultado) && $resultado !== null && $resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
      echo "<div class='container'>";
      echo "<div class='row'>";
      // Contenedor de la información a la izquierda
      echo "<div class='col-sm-6'>";
      echo "<div class='container alert alert-secondary'>";
      echo '<h2 class="text-center">Membresía Adquirida</h2><hr>';
      echo "<h6>Nombre:</h6><p>{$row['nombre']}</p><hr>";
      echo "<h6>Email:</h6><p>{$row['email']}</p><hr>";
      echo "<h6>Tipo de Membresía:</h6><p>{$row['tipo_membresia']}</p><hr>";
      echo "<h6>Precio:</h6><p>{$row['precio']}</p><hr>";
      echo "<div class='row'>";
      echo "<div class='col-sm-6'>";
      echo "<h6>Fecha de Inicio:</h6><span class='text-success'>{$row['fecha_inicio']}</span>";
      echo "</div>";
      echo "<div class='col-sm-6'>";
      echo "<h6>Fecha de Vencimiento:</h6><span class='text-danger'>{$row['fecha_termino']}</span>";
      echo "</div>";
      echo "</div>";
      // se agrega un identificador único a tu elemento de contador para poder referenciarlo en JavaScript
      echo "<div class='text-right'><i class='fas fa-clock'></i> <span id='contador-dias-{$row['id']}'></span> Días Restantes</div>";
      echo "</div>";
      echo "</div>";
      // Imagen a la derecha
      echo "<div class='col-sm-4  offset-sm-1 text-center'>";
      echo "<img src='img/logo.PNG' alt='' style='max-width: 100%;'>";
      echo "</div>";
      echo "</div>";
      echo "</div>";
  
          // Script JavaScript para calcular los días restantes
           echo "<script>
           function calcularDiasRestantes(id) {
             var fechaTermino = new Date('{$row['fecha_termino']}');
             var hoy = new Date();
             var diferencia = fechaTermino.getTime() - hoy.getTime();
             var diasRestantes = Math.ceil(diferencia / (1000 * 3600 * 24));
       
             document.getElementById('contador-dias-' + id).textContent = diasRestantes;
           }
       
           calcularDiasRestantes({$row['id']}); // Llama a la función inicialmente
       
           setInterval(function() {
             // Llama a la función cada segundo para actualizar los días restantes
             calcularDiasRestantes({$row['id']});
           }, 1000);
           </script>";

          }
      
       } else {
        echo "<div class='container m-0 row justify-content-center col-12'>";
           echo "<div class='alert alert-secondary col-12 text-center'>No se encontró una membresía activa.</div>";
           echo "</div>";
           echo "<br>";
            echo "<div class='container col-12 m-0 row justify-content-center'> <i class='fas fa-star fa-4x'></i></div>";

          }

  ?>
  
  

  <br><br><br>  
             </div>
        </div>
    </div>
</div>


      

<br><br><br><br>

      
  </div>  </div>
<!-- Footer-->
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

<?php

session_start();
include 'conex_db/conex_db.php';

//Redireccionar si no hay sesion iniciada
if (!isset($_SESSION['email'])) {
    header("Location: ../login.php");
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
      /* Estilo adicional para mejorar la apariencia */
      body {
        margin: 0;
    padding: 0;
    background-image: url("img/de2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed; /* Fija la imagen de fondo */
    background-size: 100% 100%; /* Ajusta el tamaño de la imagen */
    /* font-family: "Arial", sans-serif; */
    
      }
      /* Centrar verticalmente el contenedor en la página */
      .vertical-center {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
      }
     
  
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
}

.navbar-logo {
  width: 45px; /* Ajusta el tamaño de la imagen*/
  height: 45px;
  border-radius: 50%; /* Esto hace que la imagen tenga forma de círculo */
  margin-right: 10px; /* Ajusta el espacio entre la imagen y el texto del navbar */
}

.custom-opacity {
    
    opacity: 0.9;
 background: #019acc; 
background: -webkit-linear-gradient(to bottom, #fff, #019acc); 
background: linear-gradient(to bottom, #fff, #019acc); 
  /* background: rgba(255, 251, 251, 0.836); */
   

 }

 .card {
  transition: transform 0.3s, border-color 0.3s;
            border: 2px solid blue;
            border-radius: 8px;
            font-family:sans-serif;
            padding: 0px;
            text-align: center;
            margin-bottom: 20px; /* Agrega un margen inferior para separar las tarjetas */
            background: #8E2DE2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }

        /* Estilo cuando se pasa el cursor (hover) */
        .card:hover {
            transform: scale(1.08); 
            border-color:yellow ; 
         

        }

       
        .title {
            margin-bottom: 20px;
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
      </nav>
<br><br><br><br>

      <?php


// Verifica si se ha enviado una fecha por el formulario
if (isset($_POST['fecha'])) {
    $fechaConsulta = $_POST['fecha'];
} else {
    // Si no se ha enviado una fecha, usa la fecha actual
    $fechaConsulta = date('Y-m-d');
}

// Función para obtener el número de reservas disponibles para una fecha y horario disponible
function obtenerReservasDisponibles($fecha, $horario) {
    global $conn; // Asegúrate de que $conn esté disponible en esta función
    $stmt = $conn->prepare("SELECT COUNT(*) AS count FROM citas WHERE fecha = ? AND horario = ?");
    $stmt->bind_param("ss", $fecha, $horario);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    // Se devuelve el número de reservaciones disponibles de 15 espacios como máximo
    return max(0, 15 - $row['count']);
}
?>


    <div class="container col-sm-11 "
        style="background-color: rgba(255, 255, 255, 0.9); border-radius:10px;"><br>


        <?php
             $fechaConsulta = date('Y-m-d');     // Usa la fecha actual o una seleccionada por el usuario
             $fechaMinima = date('Y-m-d');   // Fecha minima que puede seleccionar el usuario
         ?>

        <div class="container-fluid text-center title">
            <h1 class="responsive-text"
                style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Reserva tu clase</h1>
            <hr class="bg-dark">
        </div><br>

        <center>
            <div class="row col-sm-11">

                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="text-white">Horario</h2>
                            <h4 class="text-warning">7:00.<span style="font-size:15px;">Am</span> 8:00.<span style="font-size:15px;">Am</span></h4>
                            <p class="text-white"><?php echo obtenerReservasDisponibles($fechaConsulta, "07:00:00"); ?>
                                reservaciones disponibles</p>
                            <form action="reserva.php" method="post">
                                <input type="date" name="fecha" required min="<?php echo $fechaMinima; ?>">
                                <input type="hidden" name="horario" value="07:00:00">
                                <input type="hidden" name="usuario_id" value="<?php echo $usuario_id; ?>">
                                <input type="submit" value="Reservar Cita">
                            </form>
                        </div>
                    </div>
                </div>



                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="text-white">Horario</h2>
                            <h4 class="text-warning">8:00.<span style="font-size:15px;">Am</span> 9:00.<span style="font-size:15px;">Am</span></h4>
                            <p class="text-white"><?php echo obtenerReservasDisponibles($fechaConsulta, "08:00:00"); ?>
                                reservaciones disponibles</p>
                            <form action="reserva.php" method="post">
                                <input type="date" name="fecha" required min="<?php echo $fechaMinima; ?>">
                                <input type="hidden" name="horario" value="08:00:00">
                                <input type="hidden" name="usuario_id" value="<?php echo $usuario_id; ?>">
                                <input type="submit" value="Reservar Cita">
                            </form>
                        </div>
                    </div>
                </div>



                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h2>Horario</h2>
                            <h4>9:00 AM - 10:00 AM</h4>
                            <p><?php echo obtenerReservasDisponibles($fechaConsulta, "09:00:00"); ?>
                                reservaciones disponibles</p>
                            <form action="reserva.php" method="post">
                                <input type="date" name="fecha" required min="<?php echo $fechaMinima; ?>">
                                <input type="hidden" name="horario" value="09:00:00">
                                <input type="hidden" name="usuario_id" value="<?php echo $usuario_id; ?>">
                                <input type="submit" value="Reservar Cita">
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h2>Horario</h2>
                            <h4>04:00 PM - 05:00 PM</h4>
                            <p><?php echo obtenerReservasDisponibles($fechaConsulta, "04:00:00"); ?>
                                reservaciones disponibles</p>
                            <form action="reserva.php" method="post">
                                <input type="date" name="fecha" required min="<?php echo $fechaMinima; ?>">
                                <input type="hidden" name="horario" value="04:00:00">
                                <input type="hidden" name="usuario_id" value="<?php echo $usuario_id; ?>">
                                <input type="submit" value="Reservar Cita">
                            </form>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h2>Horario</h2>
                            <h4>05:00 PM - 06:00 PM</h4>
                            <p><?php echo obtenerReservasDisponibles($fechaConsulta, "05:00:00"); ?>
                                reservaciones disponibles</p>
                            <form action="reserva.php" method="post">
                                <input type="date" name="fecha" required min="<?php echo $fechaMinima; ?>">
                                <input type="hidden" name="horario" value="05:00:00">
                                <input type="hidden" name="usuario_id" value="<?php echo $usuario_id; ?>">
                                <input type="submit" value="Reservar Cita">
                            </form>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h2>Horario</h2>
                            <h4>06:00 PM - 07:00 PM</h4>
                            <p><?php echo obtenerReservasDisponibles($fechaConsulta, "06:00:00"); ?>
                                reservaciones disponibles</p>
                            <form action="reserva.php" method="post">
                                <input type="date" name="fecha" required min="<?php echo $fechaMinima; ?>">
                                <input type="hidden" name="horario" value="06:00:00">
                                <input type="hidden" name="usuario_id" value="<?php echo $usuario_id; ?>">
                                <input type="submit" value="Reservar Cita">
                            </form>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h2>Horario</h2>
                            <h4>07:00 PM - 08:00 PM</h4>
                            <p><?php echo obtenerReservasDisponibles($fechaConsulta, "07:00:00"); ?>
                                reservaciones disponibles</p>
                            <form action="reserva.php" method="post">
                                <input type="date" name="fecha" required min="<?php echo $fechaMinima; ?>">
                                <input type="hidden" name="horario" value="07:00:00">
                                <input type="hidden" name="usuario_id" value="<?php echo $usuario_id; ?>">
                                <input type="submit" value="Reservar Cita">
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h2>Horario</h2>
                            <h4>08:00 PM - 09:00 PM</h4>
                            <p><?php echo obtenerReservasDisponibles($fechaConsulta, "08:00:00"); ?>
                                reservaciones disponibles</p>
                            <form action="reserva.php" method="post">
                                <input type="date" name="fecha" required min="<?php echo $fechaMinima; ?>">
                                <input type="hidden" name="horario" value="08:00:00">
                                <input type="hidden" name="usuario_id" value="<?php echo $usuario_id; ?>">
                                <input type="submit" value="Reservar Cita">
                            </form>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h2>Horario</h2>
                            <h4>09:00 PM - 10:00 PM</h4>
                            <p><?php echo obtenerReservasDisponibles($fechaConsulta, "09:00:00"); ?>
                                reservaciones disponibles</p>
                            <form action="reserva.php" method="post">
                                <input type="date" name="fecha" required min="<?php echo $fechaMinima; ?>">
                                <input type="hidden" name="horario" value="09:00:00">
                                <input type="hidden" name="usuario_id" value="<?php echo $usuario_id; ?>">
                                <input type="submit" value="Reservar Cita">
                            </form>
                        </div>
                    </div><br><br><br>
                </div>

                


            </div>
        </div>

</center>

<!-- Footer-->
<br><br>
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
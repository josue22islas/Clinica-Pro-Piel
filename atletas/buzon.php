<?php
// Iniciar sesión
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

   <style>
       body {
    margin: 0;
    padding: 0;
    background-image: url("img/de2.jpg");
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



 .icono-opcion {
            border: 2px solid white;
            border-radius: 5%;
            padding: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .icono-seleccionado {
            background-color: #007bff;
            color: #fff;
        }


        .modal-dialog {
  margin-top: 200px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
}

.responsive-text {
  -webkit-text-stroke: 2px black;
  color: transparent;
  text-shadow: 0px 4px 4px #282828;
  font-size: 2.5em; /* Tamaño del texto para pantallas normales */

  /* Media Query para dispositivos móviles */
  @media only screen and (max-width: 600px) {
    font-size: 1.9em; /* Tamaño del texto para pantallas más pequeñas */
  }
}

  </style>
   
  

    <title>Cross Army Fitness</title>
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

      <div class="container col-sm-7" style="background-color: rgba(255, 255, 255, 0.9); border-radius:10px;"><br>
   
      <div class="container"><br>
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Quejas o Sugerencias</h1>
                <hr>
                <form method="post" action="enviar_mensaje_buzon.php">
                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <div class="input-group">
                        <select name="nombre" id="nombre" class="form-control" disabled>
                            <?php
                            // Conexión a la base de datos
                            $conexion = mysqli_connect("localhost", "root", "", "cross_army_fitness");

                            $query = "SELECT * FROM usuarios";
                            $result = mysqli_query($conexion, $query);

                            while ($row = mysqli_fetch_assoc($result)) {
                                // Agregamos el atributo "selected" al option que tenga el ID del usuario logeado
                                $selected = ($_SESSION['id'] == $row['id']) ? 'selected' : '';
                                echo "<option value='" . $row[''] . "|" . $row['nombre'] . "' $selected>" . $row['nombre'] . " </option>";
                            }

                            // Cerrar conexión
                            mysqli_close($conexion);
                            ?>
                        </select><div class="input-group-append">
                        <span class="input-group-text"> <i class="fas fa-user"></i></span>
                      </div>
                    </div>
                        
                    </div>
                    <div class="form-group">
                        <label for="telefono">Teléfono:</label>
                         <div class="input-group">
                        <select name="telefono" id="telefono" class="form-control" disabled>
                            <?php
                            // Conexión a la base de datos
                            $conexion = mysqli_connect("localhost", "root", "", "cross_army_fitness");
                            $query = "SELECT * FROM usuarios";
                            $result = mysqli_query($conexion, $query);

                            while ($row = mysqli_fetch_assoc($result)) {
                                // Agregamos el atributo "selected" al option que tenga el ID del usuario logeado
                                $selected = ($_SESSION['id'] == $row['id']) ? 'selected' : '';
                                echo "<option value='" . $row[''] . "|" . $row['telefono'] . "' $selected>" . $row['telefono'] . " </option>";
                            }

                            // Cerrar conexión
                            mysqli_close($conexion);
                            ?>
                        </select>
                        <div class="input-group-append">
                        <span class="input-group-text"> <i class="fas fa-phone"></i></span>
                      </div>
                    </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico:</label>
                         <div class="input-group">
                        <select name="email" id="email" class="form-control" disabled>
                            <?php
                            // Conexión a la base de datos
                            $conexion = mysqli_connect("localhost", "root", "", "cross_army_fitness");

                            $query = "SELECT * FROM usuarios";
                            $result = mysqli_query($conexion, $query);

                            while ($row = mysqli_fetch_assoc($result)) {
                                // Agregamos el atributo "selected" al option que tenga el ID del usuario logeado
                                $selected = ($_SESSION['id'] == $row['id']) ? 'selected' : '';
                                echo "<option value='" . $row[''] . "|" . $row['email'] . "' $selected>" . $row['email'] . " </option>";
                            }

                            // Cerrar conexión
                            mysqli_close($conexion);
                            ?>
                        </select>
                          <div class="input-group-append">
                        <span class="input-group-text"> <i class="fas fa-at"></i></span>
                      </div>
                    </div>
                    </div>

                    <div class="form-group">
    <label for="tipo_mensaje">Tipo:</label>
    <div class="d-flex">
        <div class="mr-3">
            <i id="icono-Queja"  class="fas fa-exclamation-circle icono-opcion"></i> Queja
        </div>
        <div class="mr-3">
            <i id="icono-Sugerencia" class="fas fa-lightbulb icono-opcion"></i> Sugerencia
        </div>
        <div>
            <i id="icono-Agradecimiento"  class="fas fa-thumbs-up icono-opcion"></i> Agradecimiento
        </div>
    </div>
    <input type="hidden" name="tipo_mensaje" id="tipo_mensaje" value="Sin Especificación">
</div>


                    <div class="form-group">
                        <label for="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" placeholder=" Escribe tu mensaje aquí. Por que tu opinión nos interesa" rows="6"
                            class="form-control" required></textarea>
                    </div>
              
              <div class="container m-0 row justify-content-center">
                  <button type="submit" class="btn btn-primary col-4">
                      <i class="fas fa-paper-plane"></i> Enviar
                  </button>
              </div>


                </form>
                <?php
                if (isset($mensaje_contacto)) {
                    echo '<div class="alert alert-success mt-4">' . $mensaje_contacto . '</div>';
                }
                ?><br>
            </div>
        </div>
    </div><br>
    </div>



    <!----------------- Modal para mostrar de mensaje enviado extosamente ejemplos de youtube -------------------------------------------------------->
<div class="modal" id="myModalexitoso">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Cabecera del modal -->
            <div class="modal-header">
              <h4 class="modal-title">Envío exitoso </h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Cuerpo del modal -->
            <div class="modal-body">
         <h3 class="alert alert-success text-center"><i class="fas fa-check-circle fa-2x"></i><br>Mensaje Enviado Exitosamente<br><br></h3>
         
            </div>

            <!-- Pie del modal 
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>-->

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

  <script>
    document.getElementById('icono-Queja').addEventListener('click', function() {
    this.classList.toggle('icono-seleccionado');
    document.getElementById('icono-Sugerencia').classList.remove('icono-seleccionado');
    document.getElementById('icono-Agradecimiento').classList.remove('icono-seleccionado');
    document.getElementById('tipo_mensaje').value = (this.classList.contains('icono-seleccionado')) ? 'Queja' : '';
});

document.getElementById('icono-Sugerencia').addEventListener('click', function() {
    this.classList.toggle('icono-seleccionado');
    document.getElementById('icono-Queja').classList.remove('icono-seleccionado');
    document.getElementById('icono-Agradecimiento').classList.remove('icono-seleccionado');
    document.getElementById('tipo_mensaje').value = (this.classList.contains('icono-seleccionado')) ? 'Sugerencia' : '';
});

document.getElementById('icono-Agradecimiento').addEventListener('click', function() {
    this.classList.toggle('icono-seleccionado');
    document.getElementById('icono-Queja').classList.remove('icono-seleccionado');
    document.getElementById('icono-Sugerencia').classList.remove('icono-seleccionado');
    document.getElementById('tipo_mensaje').value = (this.classList.contains('icono-seleccionado')) ? 'Agradecimiento' : '';
});



// Mostrar el modal si el parámetro 'mensaje' es 'borrado_exitoso' el script ejecuta el modal con el mensaje 
window.onload = function() {
  const params = new URLSearchParams(window.location.search);

  if (params.has('envio') && params.get('envio') === 'mensaje_enviado_exitosamente') {
    $("#myModalexitoso").modal("show");
  }
};

    </script>



<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>

</body>
</html>



























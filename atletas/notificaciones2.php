<?php
// Iniciar sesión
session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
    header('Location: ../login.php');
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

    
     <!--CDN de font Awesome-->

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
 <link rel="icon" href="../icon/icon.ico">

  
  
   <title>Cross Army Fitness</title>

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
    /* font-family: "Arial", sans-serif; */
    
}


  .navbar-logo {
  width: 45px; /* Ajusta el tamaño de la imagen*/
  height: 45px;
  border-radius: 50%; /* Esto hace que la imagen tenga forma de círculo */
  margin-right: 10px; /* Ajusta el espacio entre la imagen y el texto del navbar */
}

.modal-dialog {
 
}
   .contenedor {
          border: 1px solid rgb(171, 170, 170);/* Ajusta estilo para el contenedor dsel mensaje*/
          background-color: rgba(130, 235, 130, 0.863);
          border-radius: 6px;
          padding: 5px;
          display: inline-block;
        }
        
                .responsive-text {
  -webkit-text-stroke: 2px black;
  color: transparent;
  text-shadow: 0px 4px 4px #282828;
  font-size: 2.5em; /* Tamaño del texto para pantallas normales */

  /* Media Query para dispositivos móviles */
  @media only screen and (max-width: 600px) {
    font-size: 1.7em; /* Tamaño del texto para pantallas más pequeñas */
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
                <a class="nav-link" href="membresia.php"><i class="fas fa-star" style="color: #ffffff;"></i>/Membresias</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="buzon.php"><i class="fas fa-envelope" style="color: #ffffff;"></i>/Quejas y Sugerencias</a>
              </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false"><i class="fas fa-cog" style="color: #ffffff;"></i>
                /Mas Opciones
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



      <div class="container col-10"><br>
<h1 class="responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Mensajes Enviados</h1><hr>
<a href="notificaciones.php" class="btn btn-success"><i class="fas fa-envelope-open"></i>  Recibidos</a>
<br><br>

<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "cross_army_fitness");

// ID del usuario actual (supongamos que se obtiene de alguna manera)
$usuario_id = $_SESSION['id']; // Usamos el ID del usuario logeado

// Consulta para obtener los mensajes enviados solo por el usuario actual
$query = "SELECT mensajes.*, emisores.nombre as emisor_nombre, destinatarios.nombre as receptor_nombre
          FROM mensajes
          INNER JOIN usuarios as emisores ON mensajes.emisor_id = emisores.id
          INNER JOIN usuarios as destinatarios ON mensajes.receptor_id = destinatarios.id
          WHERE mensajes.emisor_id = $usuario_id
          ORDER BY mensajes.fecha_envio DESC";

$result = mysqli_query($conexion, $query);

// Comprobar si hay mensajes
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        
        echo "<div class='mb-2' style='background-color:rgb(212, 209, 209); border-radius:12px; padding:10px;'>";
          echo "<i class='fas fa-user-circle' style='color: #1869f7;'></i> De: " . $row['emisor_nombre'] . " <br>";
        echo "Para: " . $row['receptor_nombre'] . "<br>";
        echo "<div class='contenedor'><i class='fas fa-envelope-open' style='color: #1869f7;'></i> " . $row['contenido'] . "<br></div>";
        echo "<p class='text-muted' >" . $row['fecha_envio'] . "<br><br></P>";
           echo "</div>";
        

    }
} else {
  echo "<div class='container m-0 row justify-content-center'>";
    echo "<div class='alert alert-secondary col-12 text-center'>No hay mensajes enviados por ti.</div>";
    echo "</div>"; 
        echo "<div class='container m-0 row justify-content-center'> <i class='fas fa-envelope fa-4x'></i></div>";
}

// Cerrar conexión
mysqli_close($conexion);
?><br><br><br><br><br><br><br>
</div>
</div>



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

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>


<script>
  document.addEventListener('DOMContentLoaded', function() {
    const listaMensajes = document.getElementById('lista-mensajes');
    const formMensaje = document.getElementById('form-mensaje');

    // Función para cargar los mensajes
    function cargarMensajes() {
        listaMensajes.innerHTML = ''; // Limpia la lista de mensajes
        // Aquí se realizará una petición AJAX a un archivo PHP que obtendrá los mensajes de la base de datos
    }

    // Función para enviar un mensaje
    formMensaje.addEventListener('submit', function(event) {
        event.preventDefault();
        const destinatario = document.getElementById('destinatario').value;
        const mensaje = document.getElementById('mensaje').value;
        // Aquí se realizará una petición AJAX a un archivo PHP que guardará el mensaje en la base de datos
        cargarMensajes(); // Recarga la lista de mensajes
    });

    // Cargar mensajes al cargar la página
    cargarMensajes();
});

</script>




</body>
</html>
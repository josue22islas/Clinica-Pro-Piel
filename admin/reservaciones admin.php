<?php
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
  

    <link rel="icon" href="../icon/icon.ico">
    
     <!--CDN de font Awesome-->

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">


   

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

  
  /* Deshabilitar hover en la primera fila del encabezado */
.table thead tr:first-child th {
    pointer-events: none;
    background-color: initial;
}

.modal-dialog {
  margin-top: 260px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
}

.table-responsive-col-sm-10 {
  overflow-x: auto; /* Agrega desplazamiento horizontal si es necesario */
  white-space: nowrap; /* Evita que los elementos se envuelvan en múltiples líneas */
}

.left {
    float: left;
    width: 45%; /* ajusta el ancho según tu diseño */
    margin-right: 5%; /* añade margen entre los elementos izquierdos y derechos */
}

.right {
    float: right;
    width: 45%; /* ajusta el ancho según tu diseño */
    margin-left: 5%; /* añade margen entre los elementos izquierdos y derechos */
}

/* Clearfix para limpiar los flotados */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

.Disponible {  /* las clases css asignadas en la disponibilidad de los resultados de la consulta de la tabla reservas disponibles*/
          background-color: #b6e7c9;
      }
      .No-Disponible { /* las clases css asignadas en la disponibilidad de los resultados de la consulta de la tabla reservas no disponibles*/
          background-color: #fddbd0;
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


    .responsive-texto {

  font-size: 1.0em; /* Tamaño del texto para pantallas normales */

  /* Media Query para dispositivos móviles */
  @media only screen and (max-width: 600px) {
    font-size: 1em; /* Tamaño del texto para pantallas más pequeñas */
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
      </nav><br><br><br><br>


      <!-- Aquí colocamos el modal de la actualizacion  -->
<div id="miModal" class="modal" style="display:none;">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Encabezado del modal -->
      <div class="modal-header">
        <h5 class="modal-title">¡Actualización exitosa!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <!-- Cuerpo del modal -->
      <div class="modal-body">
      <h3 class="alert alert-success text-center"><i class="fas fa-check-circle fa-2x"></i><br>   Los datos de la fecha han sido actualizados correctamente.<br><br></h3>
        
      </div>
    </div>
  </div>
</div>

      <div class="container col-sm-10 " style="background-color: rgba(255, 255, 255, 0.9); border-radius:10px;"><br>

     
     
      <?php
$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT dia_semana, dia_numero, mes, año FROM fechas_consultas WHERE id=1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
      echo "<div class='text-center'><h1 class='responsive-text' style='-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;'> Clases Disponibles</h1><hr> " . $row["dia_semana"];
      echo " " . $row["dia_numero"];
      echo " de " . $row["mes"];
      echo " de " . $row["año"] . "<br>  al ";
     
  }
} else {
  echo "0 resultados";
}

// Consulta para el ID=2
$sql = "SELECT dia_semana, dia_numero, mes, año FROM fechas_consultas WHERE id=2";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
      echo "<br> " . $row["dia_semana"];
      echo " " . $row["dia_numero"];
      echo " de " . $row["mes"];
      echo " de " . $row["año"] . "</div>" ;
   
  }
} else {
  echo "0 resultados";
}
$conn->close();
?><br> 
   

<h3 class="text-center">¡Dia Lunes!</h3><hr>
<div class="disenio row justify-content-center">
<!----------------------------------logoca de resrvacionens--------------------------------------------->
  
        <div class="table-responsive col-sm-8"><br>
        
               <a href="reservaciones admin.php"><button class="btn btn-info">Lunes</button></a>
               <a href="reservaciones martes.php"><button class="btn btn-info">Martes</button></a>
               <a href="reservaciones miercoles.php"><button class="btn btn-info">Miércoles</button></a>
               <a href="reservaciones jueves.php"><button class="btn btn-info my-2">Jueves</button></a>
               <a href="reservaciones viernes.php"><button class="btn btn-info">Viernes</button></a>
               <a href="reservaciones sabado.php"><button class="btn btn-info">Sábado</button></a>
               <br><br>

               <table class="table table-hover">
                <thead>
                    <tr class="text-white bg-success">
                      
                     
                        <th>Hora</th>
                        <th>Disponibilidad</th>
                        <th>Acciones</th>
                     
                    </tr>
                </thead>
                <tbody>
                <?php
                // Establecer la conexion de la base de datos
                        $servername = "localhost";
                        $username = "u990524785_josue_islas";
                        $password = "Erik22isla_";
                        $dbname = "u990524785_cross_army";

                        $conn = new mysqli($servername, $username, $password, $dbname);


                     // Crear una conexión a la base de datos
                        if ($conn->connect_error) {
                            die("Error en la conexión: " . $conn->connect_error); // Verificar si hay un error en la conexión
                        }
                      

                         // Consultar la base de datos para obtener las reservas
                        $sql = "SELECT * FROM reservas2 WHERE dia = 'Lunes'";
                        $result = $conn->query($sql);
                        
                         // Verificar si hay al menos un resultado
                        if ($result->num_rows > 0) {
                              // repite el proceso sobre los resultados y para mostrarlos df en la tabla
                            while ($row = $result->fetch_assoc()) {
                               
                      
           // Obtiene  la disponibilidad y asigna una clase CSS y un icono en función de ella
           $disponibilidad = $row['disponibilidad'];
           $clase_css = ($disponibilidad == 'Disponible') ? 'Disponible' : 'No-Disponible';
           $icono = ($disponibilidad == 'Disponible') ? '<i class="fas fa-check-circle" style="color: #11fd0d;"></i>' : '<i class="fas fa-times" style="color: #f02d2d;"></i>';
           $texto_disponibilidad = ($disponibilidad == 'Disponible') ? 'Disponible' : 'No Disponible';

           // Mostrar la fila de la tabla con los datos y el icono
           echo "<tr class='$clase_css'>
           
           <td>".$row['hora']."</td>
           <td>$texto_disponibilidad $icono</td>
           <td>
               <form action='cambiar_disponibilidad.php' method='post'>
                   <input type='hidden' name='reserva_id' value='".$row['ID']."'>
                   <input type='submit' name='cambiar_disponibilidad' value='Cambiar'>
               </form>
           </td>
       </tr>";

       }
   } else {

                            // Mostrar un mensaje si no hay datos disponibles
                            echo "<tr>
                                    <td colspan='5'><center>Datos no disponibles/Base de datos vacía</center></td>
                                  </tr>";
                        }
                    ?>
                </tbody>
            </table>
                </div><br>
        <div class="container col-sm-8 alert alert-secondary responsive-texto">
            <h4 class="text-center">Editar fecha de clases:</h4>
      <?php
$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT dia_semana, dia_numero, mes, año FROM fechas_consultas WHERE id=1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<div class='left'>";
        echo "<br> " . $row["dia_semana"];
        echo " " . $row["dia_numero"];
        echo " de " . $row["mes"];
        echo " de " . $row["año"] . " al ";
        echo "<a href='editar_fecha_clase.php?id=1'><button class='btn btn-info'>Editar</button></a>";
         echo "</div>";
    }
} else {
    echo "0 resultados";
}

// Consulta para el ID=2
$sql = "SELECT dia_semana, dia_numero, mes, año FROM fechas_consultas WHERE id=2";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<div class='right'>";
        echo "<br> " . $row["dia_semana"];
        echo " " . $row["dia_numero"];
        echo " de " . $row["mes"];
        echo " de " . $row["año"] . " ";
        echo "<a href='editar_fecha_clase.php?id=2'><button class='btn btn-info'>Editar</button></a>";
        echo "</div>";
    }
} else {
    echo "0 resultados";
}
$conn->close();
?>
 </div>
    </div><br>
    </div>

  <!-- Footer-->
<br><br><br><br>
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


  <script>
  // Obtener parámetros de la URL
  const params = new URLSearchParams(window.location.search);

  // Mostrar el modal si el parámetro 'actualizado' es 'true'
  if (params.has('actualizado') && params.get('actualizado') === 'true') {
    $(document).ready(function() {
      $('#miModal').modal('show');
    });
  }
</script>

</body>
</html>

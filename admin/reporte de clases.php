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
  margin-top: 150px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
}

.table-responsive {
  overflow-x: auto; /* Agrega desplazamiento horizontal si es necesario */
  white-space: nowrap; /* Evita que los elementos se envuelvan en múltiples líneas */
}
/* forzar la aparición permanente de la barra de desplazamiento sin que afecte el tamaño del contenido cuando el modal está activo*/
body.modal-open {
  padding-right: 0 !important;
  overflow: auto !important;
}

.custom-modal-dialog {
  
  margin-top:280px; /* Centrar horizontalmente */
}

.responsive-text {
  -webkit-text-stroke: 2px black;
  color: transparent;
  text-shadow: 0px 4px 4px #282828;
  font-size: 2.8em; /* Tamaño del texto para pantallas normales */

  /* Media Query para dispositivos móviles */
  @media only screen and (max-width: 600px) {
    font-size: 1.9em; /* Tamaño del texto para pantallas más pequeñas */
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


      <?php
$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

//agregamos un cntador de clases activos 
$sql_contar_activos = "SELECT COUNT(*) as total_activos FROM agendar_clases WHERE ESTATUS = 'activo'";
$resultado_contar_activos = $conn->query($sql_contar_activos);

if ($resultado_contar_activos->num_rows > 0) {
    $row_contar_activos = $resultado_contar_activos->fetch_assoc();
    $total_activos = $row_contar_activos['total_activos'];
} else {
    $total_activos = 0;
}

$sql = "SELECT agendar_clases.*, usuarios.nombre as nombre_usuario FROM agendar_clases
        INNER JOIN usuarios ON agendar_clases.ID_usuarios = usuarios.id"; //recuerda que el campo de la tabla clases referencial es ID_usuarios y es igual = al campo usuarios.id que es la primary key de la tabla usuarios cual mostrara los datos corrcetamente sin duplicados o ect.
$result = $conn->query($sql);
?>


<div class="container col-sm-11" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;"><br>   
<div class="container">
    <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Reporte de Clases</h1>
    <hr>
    <h3>Lista de reservaciones</h3>
    <br>
    <?php
         if (isset($_GET['error'])) {
                $error = $_GET['error'];
                // Puedes mostrar este mensaje donde quieras en tu página HTML recibirlos por el metodo get imprimirlos
                echo '<div class="m-0 row justify-content-center"><p class="alert alert-danger col-12 text-center">' . $error . '</p></div>';
              }
              if (isset($_GET['error2'])) {
                $error2 = $_GET['error2'];
                // Puedes mostrar este mensaje donde quieras en tu página HTML recibirlos por el metodo get imprimirlos
                echo '<div class="m-0 row justify-content-center"><p class="alert alert-danger col-12 text-center">' . $error2 . '</p></div>';
              }
              if (isset($_GET['error3'])) {
                $error3 = $_GET['error3'];
                // Puedes mostrar este mensaje donde quieras en tu página HTML recibirlos por el metodo get imprimirlos
                echo '<div class="m-0 row justify-content-center"><p class="alert alert-danger col-12 text-center">' . $error3 . '</p></div>';
              }
              if (isset($_GET['error4'])) {
                $error4 = $_GET['error4'];
                // Puedes mostrar este mensaje donde quieras en tu página HTML recibirlos por el metodo get imprimirlos
                echo '<div class="m-0 row justify-content-center"><p class="alert alert-danger col-12 text-center">' . $error4 . '</p></div>';
              }
    
    
      if (isset($_GET['reservado'])) {
                $reservado = $_GET['reservado'];
                // Puedes mostrar este mensaje donde quieras en tu página HTML recibirlos por el metodo get imprimirlos
                echo '<div class="m-0 row justify-content-center"><p class="alert alert-success col-12 text-center">' . $reservado . '</p></div>';
              }
    
    ?>
    <a id="abrirModal45" href="#.php" style="text-decoration:none;">
        <button class="btn btn-primary">Registrar Clases</button>
    </a>

    <a href="reservaciones admin.php" style="text-decoration:none;">
        <button class="btn btn-info my-2">Ver Disponibilidad</button>
    </a>

    <a id="abrirModal50" href="###">
        <button class="btn btn-secondary">Asistencias</button>
    </a>
    <br><br>
    <div class="table-responsive">
        <table class="table table-bordered bg-white table-hover">
            <thead>
                <tr class="btn-success">
                    
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Estatus</th>
                    <th class="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo '<tr>';
                        echo '<td>' . $row["nombre_usuario"] . '</td>'; // Mostrar el nombre del usuario
                        echo '<td>' . $row["fecha"] . '</td>';
                        echo '<td>' . $row["hora"] . '</td>';
                        echo '<td>' . $row["estatus"] . '</td>';
                        echo '<td>';
                        echo '<div class="tabla-imagen text-center" role="group">';
                        echo '<a href="editar_clases.php?id=' . $row["id"] . '" class="btn btn-success mr-2"><li class="fas fa-edit text-white"></li></a>';
                        echo '<a href="eliminar_clases.php?id=' . $row["id"] . '"class="btn btn-danger eliminar-estado" data-id="' . $row['id'] . '"><i class="fas fa-trash-alt text-white"></i></a>';//agregamos el id del modal que es igual al id del producto que se pretende eliminar
                        echo '</div>';
                        echo '</td>';
                        echo '</tr>';
                        echo '</tr>';
                    }
                } else {
                    echo '<tr><td colspan="12">No se encontraron registros.</td></tr>';
                }
                ?>
            </tbody>
        </table>
    </div>
    <div class="col-sm-12 text-center">
    <p>Total de clases agendadas: <?php echo $total_activos; ?></p>
</div><br><br><br><br>
</div>

    <!-- Modal de confirmación de eliminacion permanente -->
    <div class="modal fade" id="confirmacionModaleliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog custom-modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirmar Eliminacion</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ¿Estás seguro de que deseas eliminar la clase?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <a href="#" id="confirmareliminacion" class="btn btn-danger">Si, Eliminar</a>
      </div>
    </div>
  </div>
</div>

<?php
$conn->close();
?>

    </div>
</div>



<!------cambiar contrasena su contenedor dentro del modal---------------------->

<div class="modal fade" id="exampleModal45" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <!-- Contenido del modal -->
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel"><i class="fas fa-calendar-check"></i> Registrar Clase</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="max-height: 400px; overflow-y: auto;">
        <!-- Tu formulario -->
        
                
                <form method="post" action="insert_clases.php">
                    <div class="form-group">
                        <label for="ID_usuarios">Nombre:</label>
                        <div class="input-group">
                        <select class="form-control" id="ID_usuarios" name="ID_usuarios" required>
      <option  value="">Selecciona atleta . . .</option>
        <?php
            // Obtener la información del usuario desde la base de datos
require_once '../conex_db/consulta_usuarios.php';
        ?>
    </select><div class="input-group-append">
                        <span class="input-group-text"> <i class="fas fa-user"></i></span>
                      </div>
                    </div>
                  </div>

               

                <div class="form-group">
    <label for="fecha">Fecha:</label>                              <!-- El atributo "min" establece la fecha mínima que se puede seleccionar con javascript-->
    <input type="date" class="form-control" id="fecha" name="fecha" min="<?php echo date('Y-m-d', strtotime('-1 day')); ?>" required>
</div>


                <div class="form-group">
                    <label for="hora">Hora:</label>
                      <div class="input-group">
                    <select class="form-control" id="hora" name="hora" required>
                        <option disabled selected>Seleccione horario...</option>
                        <option value="07:00 AM">07:00 AM</option>
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                        <option value="08:00 PM">08:00 PM</option>
                        <option value="09:00 PM">09:00 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                        <!-- Otras opciones de hora -->
                    </select>
                    <div class="input-group-append">
                        <span class="input-group-text"> <i class="fas fa-stopwatch"></i></span>
                      </div> 
                   </div> 
                </div>

              

</div>
         <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
              <button type="submit" class="btn btn-primary">Reservar</button>
              </form>
    </div>

    
      </div>
    </div>
  </div>
</div>


<!------cambiar contrasena su contenedor dentro del modal---------------------->

<div class="modal fade" id="exampleModal50" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <!-- Contenido del modal -->
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel"><i class="fas fa-search"></i> Buscar Clases</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="max-height: 400px; overflow-y: auto;">
        <!-- Tu formulario -->
        
        <form method="POST" action="asistencias.php">
        <div class="form-group">
            <label for="fecha">Fecha:</label>
            <input type="date" class="form-control" id="fecha" name="fecha" required>
        </div>
        <div class="form-group">
            <label for="hora">Hora:</label>
              <div class="input-group">
            <select class="form-control" name="hora" id="hora" required>
              <option value="07:00 AM">07:00 AM</option>
              <option value="08:00 AM">08:00 AM</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
              <option value="09:00 PM">09:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
            </select>
            <div class="input-group-append">
                <span class="input-group-text"> <i class="fas fa-stopwatch"></i></span>
              </div> 
           </div> 
        </div>
      
              

</div>
         <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
              <button type="submit" class="btn btn-primary">Consultar</button>
              </form>
    </div>

    
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

  <script>
          ///script para eliminar productos y su modal de eliminacion///
          document.addEventListener('DOMContentLoaded', function() {
    var botonesCambiarEstado = document.querySelectorAll('.eliminar-estado');

    botonesCambiarEstado.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el botón se ejecute de inmediato

            var id = this.getAttribute('data-id'); // Obtener el ID del elemento a cambiar de estado
            var confirmarCambio = document.getElementById('confirmareliminacion');
            
            confirmarCambio.setAttribute('href', 'eliminar_clases.php?id=' + id);
            $('#confirmacionModaleliminar').modal('show'); // Mostrar el modal
        });
    });
});



 //codigo para ejecutar, abrir modal registrar pago
 document.getElementById('abrirModal45').addEventListener('click', function() {
    $('#exampleModal45').modal('show');
  });


   //codigo para ejecutar, abrir modal registrar pago
 document.getElementById('abrirModal50').addEventListener('click', function() {
    $('#exampleModal50').modal('show');
  });
  </script>
  
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>

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
  margin-top: 100px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
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
    font-size: 1.8em; /* Tamaño del texto para pantallas más pequeñas */
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
            <div class="container-fluid col-lg-3 col-md-6">
          <form class="d-flex" method="post" action="#">
             <input class="form-control mx-2" type="search" name="searchMembresia" placeholder="Buscar Membresía" aria-label="Search" required>
             <button id="buscarMembresiaBtn" class="btn btn-light mx-2" type="submit">Buscar</button>
          </form>
    </div>
          </ul>
        </div>
      </nav><br><br><br><br>

<?php


//$servername = "localhost";
//$username = "root";
//$password = "";
//$dbname = "cross_army_fitness";

//$conn = new mysqli($servername, $username, $password, $dbname);

//if ($conn->connect_error) {
 //   die("Conexión fallida: " . $conn->connect_error);
//}

//agregamos un cntador de membresias activas 
//$sql_contar_activos = "SELECT COUNT(*) as total_activos FROM membresias WHERE ESTATUS = 'inactivo'";
//$resultado_contar_activos = $conn->query($sql_contar_activos);

//if ($resultado_contar_activos->num_rows > 0) {
   // $row_contar_activos = $resultado_contar_activos->fetch_assoc();
   // $total_activos = $row_contar_activos['total_activos'];
//} else {
   // $total_activos = 0;
//}


//$sql = "SELECT membresias.*, usuarios.nombre as nombre_usuario FROM membresias
        //INNER JOIN usuarios ON membresias.usuario_id = usuarios.id   WHERE membresias.estatus = 'inactivo'";
//$result = $conn->query($sql);

$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Agregamos un contador de membresías activas
$sql_contar_activos = "SELECT COUNT(*) as total_activos FROM membresias WHERE ESTATUS = 'inactivo'";
$resultado_contar_activos = $conn->query($sql_contar_activos);

if ($resultado_contar_activos->num_rows > 0) {
    $row_contar_activos = $resultado_contar_activos->fetch_assoc();
    $total_activos = $row_contar_activos['total_activos'];
} else {
    $total_activos = 0;
}

if(isset($_POST['searchMembresia'])) {
    $searchMembresia = $_POST['searchMembresia'];
    // Consulta SQL para buscar membresías según el criterio de búsqueda proporcionado
    $sql = "SELECT membresias.*, usuarios.nombre as nombre_usuario FROM membresias
            INNER JOIN usuarios ON membresias.usuario_id = usuarios.id
            WHERE (membresias.tipo_membresia LIKE '%$searchMembresia%' OR
                   membresias.fecha_inicio LIKE '%$searchMembresia%' OR
                   membresias.fecha_termino LIKE '%$searchMembresia%' OR
                   usuarios.nombre LIKE '%$searchMembresia%')
            AND membresias.estatus = 'inactivo'";
} else {
    // Consulta predeterminada para mostrar todas las membresías activas si no se realiza una búsqueda
    $sql = "SELECT membresias.*, usuarios.nombre as nombre_usuario FROM membresias
            INNER JOIN usuarios ON membresias.usuario_id = usuarios.id
            WHERE membresias.estatus = 'inactivo'";
}

$result = $conn->query($sql);




?>





<div class="container col-sm-11" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;"><br>   

<div class="container">
    <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Membresías Vencidas</h1>
    <hr>
    <h3>Lista de membresías</h3>
    <br>
    <a id="abrirModal45" href="##" style="text-decoration:none;">
        <button class="btn btn-primary my-2">Registrar Membresía</button>
    </a>
   
    <br><br>
    <div class="table-responsive">
        <table class="table table-bordered bg-white table-hover">
            <thead>
                <tr class="btn-success">
                  
                    <th>Nombre</th>
                    <th>tipo de membresia</th>
                    <th>precio</th>
                    <th>fecha de inicio</th>
                    <th>fecha de termino</th>
                    <th>Estatus</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo '<tr>';
                      
                        echo '<td>' . $row["nombre_usuario"] . '</td>'; // Mostrar el nombre del usuario
                        echo '<td>' . $row["tipo_membresia"] . '</td>';
                        echo '<td>' . $row["precio"] . '</td>';
                        echo '<td>' . $row["fecha_inicio"] . '</td>';
                        echo '<td>' . $row["fecha_termino"] . '</td>';
                        echo '<td>' . $row["estatus"] . '</td>';
                        
                        
                        echo '<td>';
                        echo '<div class="btn-group" role="group">';
                        echo '<a href="editar_membresia.php?id=' . $row["id"] . '" class="btn btn-success mr-2"><i class="fas fa-edit"></i></a>';
                        echo '<a href="eliminar_membresias_vencidas.php?id=' . $row["id"] . '"class="btn btn-danger eliminar-estado" data-id="' . $row['id'] . '"><i class="fas fa-trash-alt text-white"></i></a>';//agregamos el id del modal que es igual al id del producto que se pretende eliminar
                        echo '</div>';
                        echo '</td>';
                        echo '</tr>';
                        echo '</tr>';
                    }
                } else {
                    echo '<tr><td colspan="12" class="text-center">No se encontraron registros.</td></tr>';
                }
                ?>
            </tbody>
        </table>
    </div>
    <div class="col-sm-12 text-center">
    <p>Total de membresías: <?php echo $total_activos; ?></p>
</div><br><br><br><br>
</div>

<?php
$conn->close();
?>

    </div>
</div>
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
        ¿Estás seguro de que deseas eliminar la membresía?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <a href="#" id="confirmareliminacion" class="btn btn-danger">Si, Eliminar</a>
      </div>
    </div>
  </div>
</div>


    </div>
</div>

<!------cambiar contrasena su contenedor dentro del modal---------------------->

<div class="modal fade" id="exampleModal45" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <!-- Contenido del modal -->
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel"><i class="fas fa-clipboard-list"></i> Registrar Membresía </h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="max-height: 400px; overflow-y: auto;">
        <!-- Tu formulario -->

       
    
        <div class="container">
    
    <form action="insert_membresia.php" method="post" class="mt-4">
      <div class="mb-3">
        <label for="usuario_id" class="form-label">Selecciona atleta:</label>
        <div class="input-group">
        <select name="usuario_id" id="usuario_id" class="form-control" required>
             <option value="">Seleccione atleta...</option>
          <?php
          // Conexión a la base de datos
          $conexion = mysqli_connect("localhost", "u990524785_josue_islas", "Erik22isla_", "u990524785_cross_army");

          $query = "SELECT * FROM usuarios WHERE rol = 'usuario'";
          $result = mysqli_query($conexion, $query);

          while ($row = mysqli_fetch_assoc($result)) {
              echo "<option value='" . $row['id'] . "'>" . $row['nombre'] . " " . $row[''] . "</option>";
          }

          // Cerrar conexión
          mysqli_close($conexion);
          ?>
        </select>
        <div class="input-group-append">
       <span class="input-group-text"> <i class="fas fa-user"></i></span>
    </div>
  </div>
      </div>

      <div class="mb-3">
        <label for="tipo_membresia" class="form-label">Tipo de membresía:</label>
        <div class="input-group">
        <select id="tipo_membresia" name="tipo_membresia" class="form-control" required>
          <option value="visita">Visita</option>
          <option value="semanal">Semanal</option>
          <option value="mensual">Mensual</option>
        </select>
        <div class="input-group-append">
       <span class="input-group-text"> <i class="fas fa-star" ></i></span>
    </div>
  </div>
      </div>

      <div class="mb-3">
        <label for="precio" class="form-label">Precio:</label>
        <div class="input-group">
          <select id="precio" name="precio" class="form-control" required>
           <option value="100">$ 100.00</option>
           <option value="300">$ 300.00</option>
           <option value="500">$ 500.00</option>
          
          </select>
          <input type="number" class="col-4" id="nuevoValor" placeholder="Nuevo valor">
      <button class="btn btn-primary" type="button" onclick="cambiarValores()">Cambiar precio</button>
    </div>
        </div>
     

      <div class="mb-3">
        <label for="fecha_inicio" class="form-label">Fecha de inicio:</label>
        <input type="date" id="fecha_inicio" name="fecha_inicio" class="form-control" min="<?php echo date('Y-m-d', strtotime('-1 day')); ?>" required>
      </div>

      <div class="mb-3">
        <label for="fecha_termino" class="form-label">Fecha de término:</label>
        <input type="date" id="fecha_termino" name="fecha_termino" class="form-control" min="<?php echo date('Y-m-d', strtotime('-1 day')); ?>" required>
      </div>

     
  </div>
  
  <script>
    function cambiarValores() {
      var nuevoValor = document.getElementById('nuevoValor').value;
      var select = document.getElementById('precio');
      
      // Verificar si se ingresó un valor válido
      if (nuevoValor !== "") {
        // Crear una nueva opción con el valor ingresado
        var nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = nuevoValor;
        nuevaOpcion.textContent = '$ ' + nuevoValor + '.00';

        // Agregar la nueva opción al select
        select.appendChild(nuevaOpcion);

        // Limpiar el campo de nuevo valor después de agregar la opción
        document.getElementById('nuevoValor').value = "";
      } else {
        alert("Por favor, ingresa un valor para añadirlo al select.");
      }
    }
  </script>


</div>
         <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
              <button type="submit" class="btn btn-primary">Guardar</button>
              </form>
    </div>

    
      </div>
    </div>
  </div>
</div>

<!------------------------------------------------------------------------------------------>

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
            
            confirmarCambio.setAttribute('href', 'eliminar_membresias_vencidas.php?id=' + id);
            $('#confirmacionModaleliminar').modal('show'); // Mostrar el modal
        });
    });
});



  //codigo para ejecutar, abrir modal registrar pago
  document.getElementById('abrirModal45').addEventListener('click', function() {
    $('#exampleModal45').modal('show');
  });



  </script>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>

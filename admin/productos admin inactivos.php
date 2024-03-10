<?php
session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
    header('Location: login.php');
 //cierra sesion y redirige al login   
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
       

    
        .tabla-imagen img {
    max-width: 100px;
    height: auto;
    
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

.table-responsive {
  overflow-x: auto; /* Agrega desplazamiento horizontal si es necesario */
  white-space: nowrap; /* Evita que los elementos se envuelvan en múltiples líneas */
}

/* forzar la aparición permanente de la barra de desplazamiento sin que afecte el tamaño del contenido cuando el modal está activo*/
body.modal-open {
  padding-right: 0 !important;
  overflow: auto !important;
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
            <div class="container-fluid col-lg-3 col-md-6"> <!-- Utiliza col-lg-3 para tamaños grandes y col-md-6 para tamaños medianos -->
                <form class="d-flex" method="post" action="#">
                  <input class="form-control mx-2" type="search" name="searchInput" placeholder="Buscar Producto" aria-label="Search" required>
                  <button id="buscarBtn" class="btn btn-light mx-2" type="submit">Buscar</button>
                </form>
            </div>
          </ul>
        </div>
     </nav><br><br><br><br>
      


      <div class="container col-sm-11" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;"><br>        

      <div class="container col-sm-10">
        <div class="title-cards">
           <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Productos Inactivos</h1>
            <hr>
            
        </div>

    <h3>Lista de productos</h3>
    <br>
    <div style="text-align: right;">
    <select class="btn bg-light " style="border-color: black;" id="seleccionarCategoria">
        <option value="" disabled selected style="display:none;">Selecciona una opción</option>
        <option class="text-left" value="alimentos">Alimentos</option>
        <option class="text-left" value="vestimenta">Vestimenta</option>
        <option class="text-left" value="equipos">Equipos de ejercicio</option>
    </select>
    <button class="btn btn-dark" onclick="redireccionar()">Ir a la categoría</button>
</div>


        <a href="registrar productos.php" style="text-decoration:none;">
    <button class="btn btn-primary">Registrar Productos</button>
  </a>

  <a href="ver catalogo.php">
    <button class="btn btn-success my-2">Ver Catálogo</button>
  </a>
  <br><br>

  <?php


// Conexión a la base de datos 
$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

//agregamos un cntador de productos activos 
$sql_contar_activos = "SELECT COUNT(*) as total_activos FROM productos WHERE ESTATUS = 'inactivo'";
$resultado_contar_activos = $conn->query($sql_contar_activos);

if ($resultado_contar_activos->num_rows > 0) {
    $row_contar_activos = $resultado_contar_activos->fetch_assoc();
    $total_activos = $row_contar_activos['total_activos'];
} else {
    $total_activos = 0;
}

// Verificar si se ha enviado el formulario de búsqueda
if(isset($_POST['searchInput'])) {
    $searchInput = $_POST['searchInput'];
       // Construir consulta SQL para buscar productos por nombre y marca y precio
       $sql = "SELECT id, nombre, marca, cantidad, fecha_registro, imagen, precio FROM productos WHERE ESTATUS = 'inactivo' AND (nombre LIKE '%$searchInput%' OR marca LIKE '%$searchInput%' OR precio LIKE '%$searchInput%')";
} else {
      // Si no se envió el formulario de búsqueda, obtener todos los productos de la consulta con estatus activo...
    $sql = "SELECT id, nombre, marca, cantidad, imagen, precio, fecha_registro FROM productos WHERE ESTATUS = 'inactivo'";
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Mostrar los productos activos en una tabla responsiva
    echo '<div class="table-responsive">';
    echo '<table class="table table-bordered bg-white table-hover">';
    echo '<thead class="btn-success">';
    echo '<tr>';
    echo '<th>Imagen</th>';
    echo '<th>Nombre</th>';
    echo '<th>Marca</th>';
    echo '<th>Cantidad</th>';
    echo '<th>Precio</th>';
    echo '<th>Fecha de registro</th>';
    echo '<th>Acciones</th>';
    echo '</tr>';
    echo '</thead>';
    echo '<tbody>';

    while ($row = $result->fetch_assoc()) {
        $id = $row["id"];
        $nombre = $row["nombre"];
        $marca = $row["marca"];
        $cantidad = $row["cantidad"];
        $imagen = base64_encode($row["imagen"]);
        $precio = $row["precio"];
        $fecha_registro = $row["fecha_registro"];

        echo '<tr>';
        echo '<td class="tabla-imagen text-center"><img src="data:image/jpeg;base64,' . $imagen . '" alt="' . $nombre . '" class="img-fluid" style="max-width: 60px; height: 60px;"></td>';
        echo '<td style="padding: 30px;">' . $nombre . '</td>';
        echo '<td style="padding: 30px;">' . $marca . '</td>';
        echo '<td style="padding: 30px;">' . $cantidad . '</td>';
        echo '<td style="padding: 30px;">$' . number_format($precio, 2) . ' MXN</td>';
        echo '<td style="padding: 30px;">' . $fecha_registro . '</td>';
        echo '<td style="padding: 20px;">';
        echo '<a href="cambiar_activo_producto.php?id=' . $id . '"class="btn btn-primary activar-estado" data-id="' . $row['id'] . '">Activar</a> ';
        echo '<a href="eliminar_producto.php?id=' . $id . '"class="btn btn-danger eliminar-estado" data-id="' . $row['id'] . '"><i class="fas fa-trash-alt text-white"></i></a> ';
        echo '</td>';
        echo '</tr>';
    }

    echo '</tbody>';
    echo '</table>';
    echo '</div>';
} else {
  echo "<div class='container m-0 row justify-content-center'>";
  echo "<div class='alert alert-info col-8 text-center text-primary'>No se encontraron productos.</div>";
  echo "</div>";
  echo "<div class='container m-0 row justify-content-center'><i class='fas fa-cart-plus fa-5x''></i></div>";
}

$conn->close();
?>
<div class="col-sm-12 text-center">
    <p>Total de productos inactivos: <?php echo $total_activos; ?></p>
</div>
    </div> <br><br><br><br>   

    <!-- Modal de confirmación de eliminacion permanente -->
<div class="modal fade" id="confirmacionModaleliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirmar Eliminación</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ¿Estás seguro de que deseas eliminar del sistema el  producto?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <a href="#" id="confirmareliminacion" class="btn btn-danger">Si, Eliminar</a>
      </div>
    </div>
  </div>
</div>


 <!-- Modal de confirmación para activar-->
 <div class="modal fade" id="confirmacionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirmar Cambio de Estado</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ¿Estás seguro de que deseas cambiar el estado a activo?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <a href="#" id="confirmarCambio" class="btn btn-danger">Cambiar Estado</a>
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
  
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

  <script>
        function redireccionar() {
            var categoria = document.getElementById("seleccionarCategoria").value;
            if (categoria === "alimentos") {
                window.location.href = "productos admin.php";
            } else if (categoria === "vestimenta") {
                window.location.href = "productos admin vestimenta.php";
            } else if (categoria === "equipos") {
                window.location.href = "productos admin accesorios.php";
            }
        }


        ///script para eliminar productos y su modal de eliminacion///
    document.addEventListener('DOMContentLoaded', function() {
    var botonesCambiarEstado = document.querySelectorAll('.eliminar-estado');

    botonesCambiarEstado.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el botón se ejecute de inmediato

            var id = this.getAttribute('data-id'); // Obtener el ID del elemento a cambiar de estado
            var confirmarCambio = document.getElementById('confirmareliminacion');
            
            confirmarCambio.setAttribute('href', 'eliminar_producto.php?id=' + id);
            $('#confirmacionModaleliminar').modal('show'); // Mostrar el modal
        });
    });
});


   ///script para activar producto y su modal de activacion///
   document.addEventListener('DOMContentLoaded', function() {
    var botonesCambiarEstado = document.querySelectorAll('.activar-estado');

    botonesCambiarEstado.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el botón se ejecute de inmediato

            var id = this.getAttribute('data-id'); // Obtener el ID del elemento a cambiar de estado
            var confirmarCambio = document.getElementById('confirmarCambio');
            
            confirmarCambio.setAttribute('href', 'cambiar_activo_producto.php?id=' + id);
            $('#confirmacionModal').modal('show'); // Mostrar el modal
        });
    });
});


    </script>

</body>
</html>




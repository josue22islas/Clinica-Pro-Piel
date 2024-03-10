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
    background-image: url("img/de2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed; /* Fija la imagen de fondo */
    background-size: 100% 100%; /* Ajusta el tamaño de la imagen */
    /* font-family: "Arial", sans-serif; */
    
}

     .producto img {
    width: 400px; /* Establece un ancho fijo */
    height: 400px; /* Establece una altura fija */
    object-fit: cover;
    padding: 10px;
    background-color: white;
}

.navbar-logo {
  width: 45px; /* Ajusta el tamaño de la imagen*/
  height: 45px;
  border-radius: 50%; /* Esto hace que la imagen tenga forma de círculo */
  margin-right: 10px; /* Ajusta el espacio entre la imagen y el texto del navbar */
}

.producto {
    transition: transform 0.3s; /* Agregamos una transición para suavizar el efecto */
}

.producto:hover {
    transform: scale(1.05); /* Aumentamos el tamaño en un 5% */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.producto-info h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    margin-bottom: 0;
    cursor: pointer;
}

.modal-dialog {
  margin-top: 220px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
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
            <div class="container-fluid col-lg-3 col-md-6"> <!-- Utiliza col-lg-3 para tamaños grandes y col-md-6 para tamaños medianos -->
                <form class="d-flex" method="post" action="#">
                  <input class="form-control mx-2" type="search" name="searchInput" placeholder="Buscar Material" aria-label="Search" required>
                  <button id="buscarBtn" class="btn btn-light mx-2" type="submit">Buscar</button>
                </form>
            </div>
          </ul>
        </div>
      </nav><br><br><br><br>




      <div class="container col-11" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;"><br>

      <div class="container-responsive m-0 row justify-content-center">
  <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Materiales Inactivos</h1>
</div><hr class="bg-white">


    <div class="container mt-4">
        <div class="title-cards">
            <h3>Lista de materiales</h3><br>
          
            <a href="registrar inventario.php" style="text-decoration:none;">
    <button class="btn btn-primary">Registrar Material</button>
  </a>

  <a href="#####.php">
    <button class="btn btn-danger">Inactivo</button>
  </a>
  </div><hr>
            
         

        <div class="row">
            <?php
            // Conexión a la base de datos (reemplaza con tus propios datos)
            
$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

            $conn = new mysqli($servername, $username, $password, $dbname);

            if ($conn->connect_error) {
                die("Error en la conexión: " . $conn->connect_error);
            }
// Verificar si se ha enviado el formulario de búsqueda
if(isset($_POST['searchInput'])) {
  $searchInput = $_POST['searchInput'];
     // Construir consulta SQL para buscar productos por nombre y marca y precio
     $sql = "SELECT id, nombre, marca, cantidad, peso, estado_del_equipo, precio, imagen, fecha_registro FROM inventario WHERE nombre LIKE '%$searchInput%' OR marca LIKE '%$searchInput%' OR precio LIKE '%$searchInput%'";
} else {
    // Si no se envió el formulario de búsqueda, obtener todos los productos de la consulta con estatus activo...
  $sql = "SELECT id, nombre, marca, cantidad, peso, estado_del_equipo, precio, imagen, fecha_registro FROM inventario WHERE estatus = 'inactivo'";
}
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // Mostrar los productos en la página
                while ($row = $result->fetch_assoc()) {
                    $id = $row["id"];
                    $nombre = $row["nombre"];
                    $marca = $row["marca"];
                    $cantidad = $row["cantidad"];
                    $peso = $row["peso"];
                    $estado_del_equipo = $row["estado_del_equipo"];
                    $imagen = base64_encode($row["imagen"]);
                    $precio = $row["precio"]; // Obtenemos el precio del producto
                    $fecha_registro = $row["fecha_registro"];

                    echo '<div class="col-md-4"><br>';
                    echo '<div class="producto">';
                    echo '<img src="data:image/jpeg;base64,' . $imagen . '" alt="' . $nombre . '" class="img-fluid">';
                    echo '<div class="producto-info">';
                    echo '<div class="bg-white" style="padding: 20px;"><h2><hr>' . $nombre . '</h2><br>';
                    echo '<p><b>Marca:</b> ' . $marca . '</p>';
                    echo '<p><b>Cantidad:</b> ' . $cantidad . '</p>';
                    echo '<p><b>Peso:</b> ' . $peso . ' Kg</p>';
                    echo '<p><b>Precio:</b> $ ' . number_format($precio, 2) . ' MXN</p>'; // Mostramos el precio formateado con dos decimales
                    echo '<p><b>Estado del equipo:</b> ' . $estado_del_equipo . '</p>';
                    echo '<p><b>Fecha de Registro:</b> ' . $fecha_registro . '</p>';
                    echo '<a href="cambiar_activo_inventario.php?id=' . $id . '"class="btn btn-primary activar-estado" data-id="' . $row['id'] . '">Activar</a> ';
                    echo '<a href="eliminar inventario.php?id=' . $id . '"class="btn btn-danger  eliminar-estado" data-id="' . $row['id'] . '"><i class="fas fa-trash-alt text-white"></i></a>';
                    echo '</div>';
                    echo '</div>';
                    echo '</div>';
                    echo '</div>';
                    
                    
                }
            } else {
              echo "<div class='container m-0 row justify-content-center'>";
              echo "<div class='alert alert-secondary col-8 text-center text-primary'>No se encontraron materiales inactivos.</div>";
              echo "</div>";
              echo "<div class='container m-0 row justify-content-center'><i class='fas fa-dumbbell fa-5x' style='color: black;'></i></div>";
            }

            $conn->close();
            ?>
        </div>
    </div><br><br><br><br>



 

</div>

    
          </div>



   <!-- Modal de confirmación de eliminacion permanente -->
   <div class="modal fade" id="confirmacionModaleliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirmar Eliminacion</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ¿Estás seguro de que deseas eliminar del sistema el material?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <a href="#" id="confirmareliminacion" class="btn btn-danger">Si, Eliminar</a>
      </div>
    </div>
  </div>
</div>


   <!-- Modal de confirmación de activar material-->
   <div class="modal fade" id="confirmacionModalactivar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Confirmar Cambio de Estado</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      ¿Estás seguro de que deseas cambiar el estado a activo?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <a href="#" id="confirmaractivacion" class="btn btn-danger">Cambiar Estado</a>
      </div>
    </div>
  </div>
</div>






    <script>

              ////////////////script de titulos de productos///////////////////////////////////////
              document.addEventListener('DOMContentLoaded', function() {
    const h2Elements = document.querySelectorAll('.producto-info h2');

    h2Elements.forEach(function(h2) {
        h2.setAttribute('title', h2.textContent);
    });
});

           ///script para eliminar productos y su modal de eliminacion///
       document.addEventListener('DOMContentLoaded', function() {
    var botonesCambiarEstado = document.querySelectorAll('.eliminar-estado');

    botonesCambiarEstado.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el botón se ejecute de inmediato

            var id = this.getAttribute('data-id'); // Obtener el ID del elemento a cambiar de estado
            var confirmarCambio = document.getElementById('confirmareliminacion');
            
            confirmarCambio.setAttribute('href', 'eliminar inventario.php?id=' + id);
            $('#confirmacionModaleliminar').modal('show'); // Mostrar el modal
        });
    });
});

           ///script para eliminar productos y su modal activar///
           document.addEventListener('DOMContentLoaded', function() {
    var botonesCambiarEstado = document.querySelectorAll('.activar-estado');

    botonesCambiarEstado.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el botón se ejecute de inmediato

            var id = this.getAttribute('data-id'); // Obtener el ID del elemento a cambiar de estado
            var confirmarCambio = document.getElementById('confirmaractivacion');
            
            confirmarCambio.setAttribute('href', 'cambiar_activo_inventario.php?id=' + id);
            $('#confirmacionModalactivar').modal('show'); // Mostrar el modal
        });
    });
});
    </script>




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
</body>
</html>
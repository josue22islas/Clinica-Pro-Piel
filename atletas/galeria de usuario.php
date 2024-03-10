<?php
// Iniciar sesión
session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
    header('Location: ../login.php');
    exit;
}

// Obtener la información del usuario desde la base de datos
require_once '../conex_db/conex_db.php';

// Obtener información del usuario
$email = $_SESSION['email'];

// Consulta preparada para evitar la inyección SQL
$sql = "SELECT id FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();

// Obtener el resultado de la consulta
$result = $stmt->get_result();



// Verifica si la consulta SQL devolvió al menos una fila (es decir, si se encontró un usuario con el email proporcionado)
if ($result->num_rows > 0) {
   // Si se encontró al menos un usuario, obtén la información del usuario y guarda su ID en la variable $idUsuario
  $userInformation = $result->fetch_assoc();// Obtiene los datos del usuario como un arreglo asociativo
  $idUsuario = $userInformation['id']; // extrae el ID del usuario del arreglo y lo guarda en la variable $idUsuario
} else {
  echo "Usuario no encontrado"; // Si no se encontró ningún usuario, muestra un mensaje de error
}

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MI fotos</title>

    
    <!--Contenido arrogado CDN de un servidos de boostrap-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  

    <link rel="icon" href="../icon/icon.ico">
    
     <!--CDN de font Awesome-->

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


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
  margin-top: 200px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
}




/* forzar la aparición permanente de la barra de desplazamiento sin que afecte el tamaño del contenido cuando el modal está activo*/
body.modal-open {
  padding-right: 0 !important;
  overflow: auto !important;
}
/* Este código se centra en anular los estilos que Bootstrap aplica automáticamente al abrir el
 modal para evitar que se oculte la barra de desplazamiento y que el contenido cambie su tamaño.*/
 
 
.responsive-text {
  -webkit-text-stroke: 2px black;
  color: transparent;
  text-shadow: 0px 4px 4px #282828;
  font-size: 3.5em; /* Tamaño del texto para pantallas normales */

  /* Media Query para dispositivos móviles */
  @media only screen and (max-width: 600px) {
    font-size: 2.5em; /* Tamaño del texto para pantallas más pequeñas */
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


      <div class="container col-sm-11" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;"><br>

      <div class="container mt-4">
        <div class="title-cards">
            <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;"> Mi Galería</h1>
            <hr>
            
           <?php ////include_once 'ID sesiones.php' ?>
       <a href="#" id="abrirModal" class="text-white" style="text-decoration:none;"> 
       <button class="btn btn-primary"><i class="fas fa-upload"></i> Subir foto</button></a><br><br>

            <?php
               if (isset($_GET['error'])) {
                $error = $_GET['error'];
                // Puedes mostrar este mensaje donde quieras en tu página HTML recibirlos por el metodo get imprimirlos
                echo '<div class="m-0 row justify-content-center"><p class="alert alert-danger col-12 text-center"><i class="far fa-times-circle"></i> ' . $error . '</p></div>';
              }

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


if (isset($_SESSION['eliminacion_exitosa']) && $_SESSION['eliminacion_exitosa'] === true) {
    // Mostrar modal con mensaje de eliminación exitosa
    echo '
    <div class="modal" id="eliminacionExitosaModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Eliminación Exitosa</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                <h3 class="alert alert-success text-center"><i class="fas fa-check-circle fa-2x"></i><br>La imagen se ha eliminado correctamente.<br><br></h3>
                </div>
                <!-- Modal Footer 
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>-->
            </div>
        </div>
    </div>
    
    <!-- Script para mostrar el modal automáticamente al cargar la página -->
    <script>
        $(document).ready(function(){
            $("#eliminacionExitosaModal").modal("show");
        });
    </script>
    ';
    
    // Eliminar la variable de sesión después de mostrar el mensaje
    unset($_SESSION['eliminacion_exitosa']);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (isset($_SESSION['imagen_subida_correctamente']) && $_SESSION['imagen_subida_correctamente'] === true) {
    // Mostrar modal con mensaje de subida exitosa
    echo '
    <div class="modal" id="subidaExitosaModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Subida Exitosa</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                <h3 class="alert alert-success text-center"><i class="fas fa-check-circle fa-2x"></i><br>   La imagen se ha subido correctamente.<br><br></h3>
                </div>
                <!-- Modal Footer 
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>-->
            </div>
        </div>
    </div>
    
    <!-- Script para mostrar el modal automáticamente al cargar la página -->
    <script>
        $(document).ready(function(){
            $("#subidaExitosaModal").modal("show");
        });
    </script>
    ';
    
    // Eliminar la variable de sesión después de mostrar el mensaje
    unset($_SESSION['imagen_subida_correctamente']);
}


if (isset($_SESSION['editada_correctamente']) && $_SESSION['editada_correctamente'] === true) {
  // Mostrar modal con mensaje de subida exitosa
  echo '
  <div class="modal" id="editadaExitosaModal">
      <div class="modal-dialog">
          <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                  <h4 class="modal-title">Edicion Exitosa</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <!-- Modal Body -->
              <div class="modal-body">
              <h3 class="alert alert-success text-center"><i class="fas fa-check-circle fa-2x"></i><br>   La imagen se ha editado correctamente.<br><br></h3>
              </div>
              <!-- Modal Footer 
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              </div>-->
          </div>
      </div>
  </div>
  
  <!-- Script para mostrar el modal automáticamente al cargar la página -->
  <script>
      $(document).ready(function(){
          $("#editadaExitosaModal").modal("show");
      });
  </script>
  ';
  
  // Eliminar la variable de sesión después de mostrar el mensaje
  unset($_SESSION['editada_correctamente']);
}
?>
        </div>
        
        <div class="row">
            <?php

             // Consulta SQL para obtener las fotos del usuario actual
            $sql = "SELECT id, nombre, imagen FROM galeria WHERE usuario_id = '$idUsuario'";
            $result = $conn->query($sql);
    
              // Verifica si se encontraron fotos para el usuario actual
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    // Obtener datos de cada foto
                    $id = $row["id"];
                    $nombre = $row["nombre"];
                    $imagen = base64_encode($row["imagen"]);

                 // Mostrar la información de cada foto
                    echo '<div class="col-md-4"><br>';
                    echo '<div class="producto">';                                                  //agrega una clase para el autoclik class="img-fluid imagen-galeria" al dar la imagen funcione con el javascript
                    echo '<img src="data:image/jpeg;base64,' . $imagen . '" alt="' . $nombre . '" class="img-fluid imagen-galeria" data-id="' . $id . '">';
                    echo '<div class="producto-info" style="padding: 10px; background-color: white;">';
                    echo '<h2>' . $nombre . '</h2>';
                    echo '<a href="editar_imagen.php?id=' . $id . '" ><i class="fas fa-edit"></i> Editar</a> ';
                    echo '<a href="#" style="color:red;" class="eliminar-imagen" data-id="' . $id . '"><i class="fas fa-trash-alt"> </i> Eliminar</a>';//eliminar-imagen y un atributo data-id que contiene el ID de la imagen.
                    echo '</div>';
                    echo '</div>';
                    echo '</div>';
                }
            } else {
                echo "<div class='container m-0 row justify-content-center'>";
                echo "<div class='alert alert-secondary col-12 text-center'>No se encontraron fotos.</div>";//mensaje de error
                echo "</div>";
                echo "<br><br> ";
                echo "<div class='container m-0 row justify-content-center'> <i class='far fa-images fa-4x'></i></div>";
            }
        
            // Cierra la conexión a la base de datos
            $conn->close();
            ?>

            
        </div><br><br><br><br><br><br><br><br><br><br><br>

  <!---------------modal de contenedor de envio de mensaje------------------------------------------------------------->

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <!-- Contenido del modal -->
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel"><i class="far fa-images"></i> Mi galería</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      <!---cuerpo del modal su contenido----------->
      <div class="container">
    <div class="row">
        <div class="col-12">
            <form action="subir fotos.php" method="post" enctype="multipart/form-data">
    
            <h4>Sube tus fotos</h4>

                <div class="form-group">
                    <label for="nombre">Título:</label>
                    <div class="input-group">
                    <input type="text" id="nombre" name="nombre" placeholder="Ingrese título de su foto" class="form-control" required>
                    <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-comments"></i></span>
                                </div>
                              </div>
                </div>

                <div class="form-group">
                    <label for="imagen"><i class="fas fa-upload"></i> Subir foto:</label>
                    <input type="file" id="imagen" name="imagen" accept="image/*" class="form-control-file" required>
               </div>
        </div>
    </div>
</div>
    </div>
    <!---Termino del cuerpo del modal ----------->
         <div class="modal-footer">
        
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
               <button type="submit" class="btn btn-primary"><i class="fas fa-upload"></i> Subir</button>
             </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





    
<!--------------------------- Modal de confirmación -------------------------->
<div class="modal fade" id="confirmacionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirmar Eliminación</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ¿Estás seguro de que deseas eliminar esta imagen?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <a href="#" id="confirmarEliminacion" class="btn btn-danger">Eliminar</a>
      </div>
    </div>
  </div>
</div>



    <!-- Agregamos el script JavaScript para el click sobre la imagen que tiene su clase class="img-fluid imagen-galeria" -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var imagenes = document.querySelectorAll('.imagen-galeria');
        imagenes.forEach(function(imagen) {
            imagen.addEventListener('click', function() {
                var id = this.getAttribute('data-id');
                window.location.href = 'pagina_imagen_grande.php?id=' + id;
            });
        });
    });


//////usamos  JavaScript para mostrar el modal cuando el enlace es clicado en eliminar/////////////    
document.addEventListener('DOMContentLoaded', function() {
    var enlacesEliminar = document.querySelectorAll('.eliminar-imagen');

    enlacesEliminar.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace se ejecute de inmediato

            var id = this.getAttribute('data-id'); // Obtener el ID de la imagen
            var confirmarEliminacion = document.getElementById('confirmarEliminacion');
            
            confirmarEliminacion.setAttribute('href', 'eliminar_imagen.php?id=' + id);
            $('#confirmacionModal').modal('show'); // Mostrar el modal
        });
    });
});



        
////////////////script de titulos de las imagenes///////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const h2Elements = document.querySelectorAll('.producto-info h2');

    h2Elements.forEach(function(h2) {
        h2.setAttribute('title', h2.textContent);
    });
});


//codigo para ejecutar, abrir modal de sube tus fotos
document.getElementById('abrirModal').addEventListener('click', function() {
    $('#exampleModal').modal('show');
  });



    //codigo para ejecutar, abrir modal de 
    document.getElementById('abrirModal2').addEventListener('click', function() {
    $('#exampleModal2').modal('show');
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
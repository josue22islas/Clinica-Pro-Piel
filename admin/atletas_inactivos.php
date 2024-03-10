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
  
  table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse; /* une los bordes de celdas adyacentes */
  border: 1px solid black; /* ancho, estilo y color del borde */
  padding: 8px; /* añade espacio entre el borde y el contenido */
  text-align: left; /* alinea el texto a la izquierda */
  border: 1px solid #000; /* ancho, estilo y color del borde de celdas */
  padding: 10px; /* añade espacio entre el borde y el contenido */
  background-color: rgba(255, 255, 255, 0.685);
}

th,
td {
  text-align: left;
  padding: 8px;
  border: 1px solid black; /* ancho, estilo y color del borde */
  padding: 8px; /* añade espacio entre el borde y el contenido */
  text-align: left; /* alinea el texto a la izquierda */
  border: 1px solid #000; /* ancho, estilo y color del borde de celdas */
  padding: 10px; /* añade espacio entre el borde y el contenido */
  background-color: rgba(255, 255, 255, 0.685);
  
}

th {
  background-color: rgba(3, 185, 3, 0.942);
  color: white;
  font-weight: bold;
}



tr:hover {
  background-color: #ddd;
}

td.actions {
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
 
  font-size: 14px;
}

.

.btn-danger {
  background-color: red;
 
}

.table-responsive.col-sm-16 {
  overflow-x: auto; /* Agrega desplazamiento horizontal si es necesario */
  white-space: nowrap; /* Evita que los elementos se envuelvan en múltiples líneas */
}

td.hidden {
    display: none;
}

  /* Deshabilitar hover en la primera fila del encabezado */
  .table thead tr:first-child th {
    pointer-events: none;
    background-color: initial;
}


.table-responsive {
  overflow-x: auto; /* Agrega desplazamiento horizontal si es necesario */
  white-space: nowrap; /* Evita que los elementos se envuelvan en múltiples líneas */
}

.modal-dialog {
  margin-top: 150px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
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
  }s
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
                  <input class="form-control mx-2" type="search" name="searchInput" placeholder="Buscar Atleta" aria-label="Search" required>
                  <button id="buscarBtn" class="btn btn-light mx-2" type="submit">Buscar</button>
                </form>
            </div>
          </ul>
        </div>
      </nav><br><br><br><br>


      
      <div class="container col-sm-11" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;"><br>   

<div class="disenio">
        <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Atletas Inactivos</h1><hr>
        <h3 class="col-10">Lista de Atletas</h3>
        <br>

        <div class="col-sm-6">
        <a id="abrirModal45" class="text-white" style="text-decoration:none;" href="#####">
            <button class="btn btn-primary" type="button">Registrar Atleta
        </button></a>
        <br><br>
        </div>

        

 
        <div class="table-responsive col-sm-12"> <!-- Agregar esta clase para hacer la tabla responsive -->
        <table class="table table-bordered bg-white table-hover" border="1" cellspacing="2" cellpading="3">
            <thead >
                <tr class="text-white btn-success">
                    <th>Nombre completo</th>
                    <th>Corre eletrónico</th>
                  
                   
                    <th>Teléfono</th>
                    <th>Estatus</th>
                    <th>Edad</th>
                    <th>Sexo</th>
                    <th>Categoría</th>
                   
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
  
                <?php
                $servername = "localhost";
                $username = "u990524785_josue_islas";
                $password = "Erik22isla_";
                $dbname = "u990524785_cross_army";
 
                 $conn = new mysqli($servername, $username, $password, $dbname);
 
                 if ($conn->connect_error) {
                     die("Error en la conexión: " . $conn->connect_error);
                 }
 

                 $sql_contar_activos = "SELECT COUNT(*) as total_inactivos FROM usuarios WHERE ESTATUS = 'inactivo'";
                $resultado_contar_activos = $conn->query($sql_contar_activos);

                if ($resultado_contar_activos->num_rows > 0) {
                    $row_contar_activos = $resultado_contar_activos->fetch_assoc();
                    $total_activos = $row_contar_activos['total_inactivos'];
                } else {
                    $total_activos = 0;
                }


                
        /////nos permite buscar nombre edad, sesxo ect.. de la tabla usuarios
        if(isset($_POST['searchInput'])) {
          $searchInput = $_POST['searchInput'];
          $searchInputLower = strtolower($searchInput); // Convertir la palabra clave a minúsculas
          // Construir consulta SQL para buscar atletas sin ser sensible a mayúsculas o minúsculas
          $sql = "SELECT id, nombre, email, ciudad, codigo_postal, pais_codigo, telefono, estatus, edad, sexo, categoria, imagen, fecha_registro, rol 
                  FROM usuarios 
                  WHERE (LOWER(nombre) LIKE '%$searchInputLower%' OR LOWER(email) LIKE '%$searchInputLower%' OR LOWER(ciudad) LIKE '%$searchInputLower%' OR LOWER(codigo_postal) LIKE '%$searchInputLower%' OR LOWER(pais_codigo) LIKE '%$searchInputLower%' OR LOWER(telefono) LIKE '%$searchInputLower%' OR LOWER(estatus) LIKE '%$searchInputLower%' OR LOWER(edad) LIKE '%$searchInputLower%' OR LOWER(sexo) LIKE '%$searchInputLower%' OR LOWER(categoria) LIKE '%$searchInputLower%' OR LOWER(imagen) LIKE '%$searchInputLower%' OR LOWER(fecha_registro) LIKE '%$searchInputLower%' OR LOWER(rol) LIKE '%$searchInputLower%')
                  AND ESTATUS = 'inactivo'";
      } else {
          // Si no se envió el formulario de búsqueda, obtener todos los campos de los atletas con estatus activo
          $sql = "SELECT id, nombre, email, ciudad, codigo_postal, pais_codigo, telefono, estatus, edad, sexo, categoria, imagen, fecha_registro, rol 
                  FROM usuarios 
                  WHERE ESTATUS = 'inactivo'";
      }





                //$sql = "SELECT * FROM usuarios WHERE ESTATUS = 'inactivo'";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>
                        <td>".$row['nombre']."</td> 
                        <td>".$row['email']."</td>
                        <td class='hidden'>".$row['ciudad']."</td>
                        <td class='hidden'>".$row['codigo_postal']."</td>
                        <td>".$row['pais_codigo'] . ' ' . $row['telefono']."</td>
                        <td class='text-success'> <i class='fas fa-circle fa-xs text-success'>/</i>".$row['estatus']."</td>
                        <td>".$row['edad']."</td>
                        <td>".$row['sexo']."</td>
                        <td>".$row['categoria']."</td>
                        <td class='hidden'>".$row['fecha_registro']."</td>
                               
                                  <td>
                                    <a href='cambiar_estatus_activo.php?id=".$row['id']."' style='text-decoration:none;'>
                                    <button title='Activar' class='btn btn-primary cambiar-estado' data-id='" . $row['id'] . "'  type='button'> Activar</button>
                                    </a>

                                    <a href='eliminar atleta.php?id=".$row['id']."'>
                                    <button title='Eliminar' class='btn btn-danger  eliminar-estado' data-id='" . $row['id'] . "'  type='button'><i class='fas fa-trash-alt text-white'></i>
                                    </button></a>
                                </td>
                            </tr>";
                    }
                } else {
                    echo "<tr>
                        <td colspan='11'><center>Datos no disponibles/Base de datos vacia</center></td>
                        </tr>";
                }
                ?>
                      
                        
            </tbody>
        </table> </div> </div>
        <div class="col-sm-12 text-center">
    <p>Total de atletas inactivos: <?php echo $total_activos; ?></p>
</div><br><br><br><br>
    </div>
    </div>                  </div>

 <!-- Modal de confirmación para activar-->
<div class="modal fade" id="confirmacionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog custom-modal-dialog" role="document">
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
  



<!-- Modal de confirmación de eliminacion permanente -->
<div class="modal fade" id="confirmacionModaleliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog custom-modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirmar Cambio de Estado</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ¿Estás seguro de que deseas eliminar permanente atleta?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <a href="#" id="confirmareliminacion" class="btn btn-danger">Si, Eliminar</a>
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
        <h3 class="modal-title" id="exampleModalLabel"><i class="fas fa-clipboard-list"></i> Registrar Atleta</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="max-height: 400px; overflow-y: auto;">
        <!-- Tu formulario -->

        <form action="validaciones_registro_atleta.php" method="POST">
        
        <div class="container">
                <div class="top">
                   
                </div>
                <div class="input-field">
                <label for="nombre">Nombre:</label>
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Nombre completo" id="nombre" name="nombre" required> 
                <div class="input-group-append">
                    <span class="input-group-text"> <i class="fas fa-user"></i></span>
                 </div>
               </div>
            </div><br>
        <div class="input-field">
                <label for="email">Correo electrónico:</label>
                <div class="input-group">
                <input type="email" class="form-control"  placeholder="Correo electrónico" id="email" name="email" required>
                <div class="input-group-append">
                    <span class="input-group-text"> <i class="fas fa-at"></i></span>
                 </div>
               </div> 
            </div><br>
        <div class="input-field">
            <label for="contraseña">Contraseña:</label>
            <div class="input-group">
            <input type="Password" class="form-control" placeholder="Contraseña" id="contraseña" name="contraseña" required>
            <div class="input-group-append">
                    <span class="input-group-text"> <i class="fas fa-lock"></i></span>
                 </div>
               </div> 
        </div><br>
       
        <div class="input-field">
        <label for="pais_codigo">Lada:</label>
            <div class="input-group">
                 <select class="form-control" id="pais_codigo" name="pais_codigo" required>
                    <option class="text-dark" value="+52">México (+52)</option>
                    <option class="text-dark" value="+1">Estados Unidos (+1)</option>
                    <!-- Agregamos mas opciones si se necesitan-->
                </select>
                <div class="input-group-append">
                    <span class="input-group-text"> <i class="fas fa-phone-square"></i></span>
                 </div>
               </div> 
            </div><br>

        <div class="input-field">
                <label for="telefono">Teléfono:</label>
                 <div class="input-group">
                <input type="tel" class="form-control" placeholder="Número de teléfono" id="telefono" name="telefono" oninput="formatoNumero()" maxlength="10" required>
                <div class="input-group-append">
                    <span class="input-group-text"> <i class="fas fa-phone"></i></span>
                 </div>
               </div>  
            </div><br>
            
        
            </div>      

</div>
         <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
              <button type="submit" class="btn btn-primary">Registrar</button>
              </form>
    </div>

    
      </div>
    </div>
  </div>
</div>


   <!----------------- Modal para mostrar registro exitoso-------------------------------------------------------->
   <div class="modal" id="myModalexitoso">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Registro Exitoso </h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-success text-center"><i class="fas fa-check-circle fa-2x" style="color: #03fc5a;"></i><br>Se registraron tus datos exitosamente<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

       </div>
   </div>
</div>


 <!-------------------Modal para mostrar error en password------------------------------------------------------>
 <div class="modal" id="myModalerror">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Ventana de Error </h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-danger text-center"><i class="fas fa-times fa-2x" style="color: #f70202;"></i><br>La contraseña debe contener al menos una letra y un número.<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

       </div>
   </div>
</div>


 <!-------------------- Modal para mostrar error telefono----------------------------------------------------->
 <div class="modal" id="myModalerror2">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Ventana de Error </h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-danger text-center"><i class="fas fa-times fa-2x" style="color: #f70202;"></i><br>¡El teléfono ya está en uso!<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

       </div>
   </div>
</div>

 <!-----------------------Modal para mostrar error en email-------------------------------------------------->
 <div class="modal" id="myModalerror3">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Ventana de Error</h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-danger text-center"><i class="fas fa-times fa-2x" style="color: #f70202;"></i><br>¡El correo ya está en uso!<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

       </div>
   </div>
</div>


 <!--------------------Modal para mostrar error en nombre----------------------------------------------------->
 <div class="modal" id="myModalerror4">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Ventana de Error </h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-danger text-center"><i class="fas fa-times fa-2x" style="color: #f70202;"></i><br>¡El nombre ya está en uso!<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

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

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
 
  
  <script>

    ///script para activar atleta y su modal de eliminacion///
document.addEventListener('DOMContentLoaded', function() {
    var botonesCambiarEstado = document.querySelectorAll('.cambiar-estado');

    botonesCambiarEstado.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el botón se ejecute de inmediato

            var id = this.getAttribute('data-id'); // Obtener el ID del elemento a cambiar de estado
            var confirmarCambio = document.getElementById('confirmarCambio');
            
            confirmarCambio.setAttribute('href', 'cambiar_estatus_activo.php?id=' + id);
            $('#confirmacionModal').modal('show'); // Mostrar el modal
        });
    });
});


///script para eliminar atleta y su modal de eliminacion///
    document.addEventListener('DOMContentLoaded', function() {
    var botonesCambiarEstado = document.querySelectorAll('.eliminar-estado');

    botonesCambiarEstado.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el botón se ejecute de inmediato

            var id = this.getAttribute('data-id'); // Obtener el ID del elemento a cambiar de estado
            var confirmarCambio = document.getElementById('confirmareliminacion');
            
            confirmarCambio.setAttribute('href', 'eliminar atleta.php?id=' + id);
            $('#confirmacionModaleliminar').modal('show'); // Mostrar el modal
        });
    });
});


  //codigo para ejecutar, abrir modal registrar pago
  document.getElementById('abrirModal45').addEventListener('click', function() {
    $('#exampleModal45').modal('show');
  });



      // Mostrar el modal si el parámetro 'mensaje' es 'borrado_exitoso' el script ejecuta el modal con el mensaje 
window.onload = function() {
  const params = new URLSearchParams(window.location.search);

  if (params.has('registro') && params.get('registro') === 'registro_exitosamente') {
    $("#myModalexitoso").modal("show");
  } 

  if (params.has('error') && params.get('error') === 'error_password') {
    $("#myModalerror").modal("show");
  } 

  if (params.has('error2') && params.get('error2') === 'error_telefono') {
    $("#myModalerror2").modal("show");
  } 

  if (params.has('error3') && params.get('error3') === 'error_email') {
    $("#myModalerror3").modal("show");
  } 

  if (params.has('error4') && params.get('error4') === 'error_nombre') {
    $("#myModalerror4").modal("show");
  } 

};


function formatoNumero() {
        var input = document.getElementById('telefono');
        var numero = input.value.replace(/\D/g, ''); // Eliminar no dígitos
        numero = numero.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Formatear como xxx-xxx-xxxx
        input.value = numero;
    }
</script>

</body>
</html>
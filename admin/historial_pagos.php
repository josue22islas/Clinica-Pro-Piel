<?php
session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
  header('Location: ../login privilegiados.php');
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
            <div class="container-fluid col-lg-3 col-md-6">
        <form class="d-flex" method="post" action="#">
            <input class="form-control mx-2" type="search" name="searchPago" placeholder="Buscar Pago/Adeudo Pendiente" aria-label="Search" required>
            <button id="buscarPagoBtn" class="btn btn-light mx-2" type="submit">Buscar</button>
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

//agregamos un cntador de pagados
///$sql_contar_pagado = "SELECT COUNT(*) as total_pagado FROM pagos_adeudos WHERE estado = 'pagado'";
//$resultado_contar_pagado = $conn->query($sql_contar_pagado);

//if ($resultado_contar_pagado->num_rows > 0) {
//$row_contar_pagado = $resultado_contar_pagado->fetch_assoc();
//    $total_pagado = $row_contar_pagado['total_pagado'];
//} else {
  //  $total_pagado = 0;
//}

//$sql = "SELECT pagos_adeudos.*, usuarios.nombre as nombre_usuario FROM pagos_adeudos
//        INNER JOIN usuarios ON pagos_adeudos.usuario_id = usuarios.id WHERE estado = 'pagado'";//filtro para mostrar los pendientes solamete
//$result = $conn->query($sql);



$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

//agregamos un cntador de pagados
$sql_contar_pagado = "SELECT COUNT(*) as total_pagado FROM pagos_adeudos WHERE estado = 'pagado'";
$resultado_contar_pagado = $conn->query($sql_contar_pagado);

if ($resultado_contar_pagado->num_rows > 0) {
$row_contar_pagado = $resultado_contar_pagado->fetch_assoc();
    $total_pagado = $row_contar_pagado['total_pagado'];
} else {
    $total_pagado = 0;
}


if(isset($_POST['searchPago'])) {
    $searchPago = strtolower($_POST['searchPago']); // Convertir término de búsqueda a minúsculas
    // Consulta SQL para buscar pagos o adeudos según el criterio de búsqueda proporcionado (convertido a minúsculas)
    $sql = "SELECT pagos_adeudos.*, usuarios.nombre as nombre_usuario FROM pagos_adeudos
            INNER JOIN usuarios ON pagos_adeudos.usuario_id = usuarios.id
            WHERE (LOWER(pagos_adeudos.producto) LIKE '%$searchPago%' OR
                   LOWER(pagos_adeudos.estado) LIKE '%$searchPago%' OR
                   LOWER(pagos_adeudos.cantidad) LIKE '%$searchPago%' OR
                   LOWER(pagos_adeudos.fecha_pago) LIKE '%$searchPago%' OR
                   LOWER(usuarios.nombre) LIKE '%$searchPago%') AND pagos_adeudos.estado = 'pagado'";
} else {
    // Consulta predeterminada para mostrar los pendientes si no se realiza una búsqueda
    $sql = "SELECT pagos_adeudos.*, usuarios.nombre as nombre_usuario FROM pagos_adeudos
            INNER JOIN usuarios ON pagos_adeudos.usuario_id = usuarios.id
            WHERE pagos_adeudos.estado = 'pagado'";
}

$result = $conn->query($sql);
?>


<div class="container col-sm-11" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;"><br>   

<div class="container col-sm-11">
    <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Historial de Pagos</h1>
    <hr>
    <h3>Pagos liquidados</h3>
    <br>
    <a id="abrirModal45" href="###">
        <button class="btn btn-primary">Registrar Pago</button>
    </a>
   
    <br><br>
    <div class="table-responsive">
         <table class="table table-bordered bg-white table-hover">
            <thead>
                 <tr class="btn-success">
                  
                    <th>Nombre</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Abono</th>
                    <th>Deuda</th>
                    <th>Fecha de pago</th>
                    <th>Estado</th>
                    <!--<th>Fecha de Creación</th>--->
                   
                    
                    
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo '<tr>';
                        echo '<td>' . $row["nombre_usuario"] . '</td>'; // Mostrar el nombre del usuario
                        echo '<td>' . $row["producto"] . '</td>';
                        echo "<td> $" . $row['precio'] . "</td>";
                        echo '<td>' . $row["cantidad"] . '</td>';
                        echo "<td> $" . $row['abono'] . "</td>";
                        echo "<td> $" . $row['deuda'] . "</td>";
                        echo '<td>' . $row["fecha_pago"] . '</td>';
                        echo '<td>' . $row["estado"] . '</td>';
                        //echo '<td>' . $row["fecha_creacion"] . '</td>';
                        
                       // echo '<td>';
                        echo '<div class="btn-group" role="group">';
                        echo '<td><a href="editar pagos y adeudos.php?id=' . $row["id"] . '" class="btn btn-success"><i class="fas fa-edit"></i></a> ';
                        echo "<a href='comprobante_pago.php?id={$row['id']}' class='btn btn-primary'><i class='fas fa-file-word'></i></a> ";
                        echo '<a href="eliminar pagos y adeudos.php?id=' . $row["id"] . '"class="btn btn-danger eliminar-estado" data-id="' . $row['id'] . '"><i class="fas fa-trash-alt text-white"></i></a></td>';//agregamos el id del modal que es igual al id del producto que se pretende eliminar
                        echo '</div>';
                        echo '</td>';
                        echo '</tr>';
                        echo '</tr>';
                    }
                } else {
                    echo '<tr><td class="text-center" colspan="12">No se encontraron registros.</td></tr>';
                }
                ?>
            </tbody>
        </table>
    </div> <div class="col-sm-12 text-center">
    <p>Total de pagos liquidados: <?php echo $total_pagado; ?></p>
</div><br><br><br>



<!-- Modal de confirmación de eliminación permanente -->
<div class="modal fade custom-modal" id="confirmacionModalEliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog custom-modal-dialog" role="document">
    <div class="modal-content custom-modal-content">
      <div class="modal-header custom-modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirmar Eliminación</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body custom-modal-body">
        ¿Estás seguro de que deseas eliminar?
      </div>
      <div class="modal-footer custom-modal-footer">
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
        <h3 class="modal-title" id="exampleModalLabel"><i class="fas fa-hand-holding-usd"></i> Registrar Pago</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="max-height: 400px; overflow-y: auto;">
        <!-- Tu formulario -->

        <div class="container col-sm-12">
    

    <form action="insertar_pagos y adeudos.php" method="post">
    
  
   
    <div class="form-group">
    <label for="usuario_id">Atleta:</label>
    <div class="input-group">
    <select class="form-control" id="usuario_id" name="usuario_id" required>
      <option  value="">Selecciona atleta . . .</option>
        <?php
            // Obtener la información del usuario desde la base de datos
require_once '../conex_db/consulta_usuarios.php';
        ?>
    </select>
    <div class="input-group-append">
       <span class="input-group-text"> <i class="fas fa-user"></i></span>
    </div>
  </div>
</div>


     
        <div class="form-group">
            <label for="producto">Producto:</label>
            <div class="input-group">
             <input type="text" class="form-control" id="producto" name="producto"   placeholder="Ingrese nombre del producto" required>
            <div class="input-group-append">
          <span class="input-group-text"> <i class="fas fa-cart-plus"></i></span>
       </div>
       </div> 
   </div>
        
        <div class="form-group">
            <label for="precio">Precio:</label>
             <div class="input-group">
            <input type="number" class="form-control" id="precio" name="precio"  placeholder="Ingrese precio del producto $" required>
            <div class="input-group-append">
          <span class="input-group-text"> <i class="fas fa-dollar-sign"></i></span>
       </div>
       </div> 
        </div>
        <div class="form-group">
        <label for="cantidad">Cantidad:</label>
         <div class="input-group">
            <select class="form-control" id="cantidad" name="cantidad" required>
                <option value="1 Unidad">1 Unidad</option>
                <option value="2 Unidades">2 Unidades</option>
                <option value="3 Unidades">3 Unidades</option>
                <option value="4 Unidades">4 Unidades</option>
            </select> 
            <div class="input-group-append">
          <span class="input-group-text"> <i class="fas fa-sort-amount-up"></i></span>
       </div> 
       </div>       
          </div>
        <div class="form-group">
            <label for="abono">Abono:</label>
            <div class="input-group">
            <input type="number" class="form-control" id="abono" name="abono" placeholder="Ingrese abono $" required>
            <div class="input-group-append">
          <span class="input-group-text"> <i class="fas fa-coins"></i></span>
       </div> 
       </div> 
        </div>
        <div class="form-group">
            <label for="deuda">Deuda:</label>
            <div class="input-group">
            <input type="number" class="form-control" id="deuda" name="deuda"  placeholder="Ingrese monto de adeudo $" required>
            <div class="input-group-append">
          <span class="input-group-text"> <i class="fas fa-comments-dollar"></i></span>
       </div> 
       </div> 
        </div>
        <div class="form-group">
            <label for="fecha_pago">Fecha de pago:</label>
            <div class="input-group">
            <input type="date" class="form-control" id="fecha_pago" name="fecha_pago"  min="<?php echo date('Y-m-d', strtotime('-1 day')); ?>" required>
            <div class="input-group-append">
          <span class="input-group-text"> <i class="fas fa-money-bill-wave"></i></span>
       </div> 
       </div> 
        </div>
        <div class="form-group">
            <label for="estado">Estado:</label>
            <div class="input-group">
            <select class="form-control" id="estado" name="estado" required>
                <option value="pagado">Pagado</option>
                <option value="pendiente">Pendiente</option>
            </select>
            <div class="input-group-append">
          <span class="input-group-text"> <i class="fas fa-hand-holding-usd"></i></span>
       </div> 
        </div>
        </div>
   

</div>




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
            
            confirmarCambio.setAttribute('href', 'eliminar pagos y adeudos.php?id=' + id);
            $('#confirmacionModalEliminar').modal('show'); // Mostrar el modal
        });
    });
});




  //codigo para ejecutar, abrir modal registrar pago
  document.getElementById('abrirModal45').addEventListener('click', function() {
    $('#exampleModal45').modal('show');
  });


  ///actualiza dinámicamente el campo deuda cuando se agregue un abono al formularios.
document.addEventListener('DOMContentLoaded', function() {
  // Obtener los elementos del DOM
  const precioInput = document.getElementById('precio');
  const abonoInput = document.getElementById('abono');
  const deudaInput = document.getElementById('deuda');

  // Función para calcular y actualizar la deuda
  function actualizarDeuda() {
    const precio = parseFloat(precioInput.value) || 0;
    const abono = parseFloat(abonoInput.value) || 0;

    // Calcular la deuda restando el abono del precio
    const deuda = precio - abono;

    // Mostrar la deuda actualizada en el campo correspondiente
    deudaInput.value = deuda >= 0 ? deuda : 0;
  }

  // Escuchar cambios en los campos de precio y abono y los cambias
  precioInput.addEventListener('input', actualizarDeuda);
  abonoInput.addEventListener('input', actualizarDeuda);
});



//verifica el valor del campo deuda y establece el estadoo correspondiente ('pendiente' o 'pagado' en función de si la deuda es mayor ke 
//cero o igual a cero. Luego, se llama a esta función cada vez que hay cambios en los campos relacionados para mantener actualizado el estado segunn la deuda
document.addEventListener('DOMContentLoaded', function() {
  const precioInput = document.getElementById('precio');
  const abonoInput = document.getElementById('abono');
  const deudaInput = document.getElementById('deuda');
  const cantidadSelect = document.getElementById('cantidad');
  const estadoSelect = document.getElementById('estado');

  // Función para calcular y actualizar la deuda
  function actualizarDeuda() {
    const deuda = parseFloat(deudaInput.value) || 0;

    // Actualizar el estado según el valor de la deuda
    if (deuda > 0) {
      estadoSelect.value = 'pendiente';
    } else {
      estadoSelect.value = 'pagado';
    }
  
    // Mostrar el nuevo precio en el campo correspondiente
    precioInput.value = nuevoPrecio;

    // Llamar a la función actualizardeuda después de cambiar el precio
    actualizarDeuda();
  }

  // Escuchar cambios en los campos de precio, abono, cantidad y deuda
  precioInput.addEventListener('input', actualizarDeuda);
  abonoInput.addEventListener('input', actualizarDeuda);
  
  deudaInput.addEventListener('input', actualizarDeuda);
});



/// establece automáticamente la fecha de pago al valor actual ''fecha actual' al actualizar los datos,
document.addEventListener('DOMContentLoaded', function() {
  // Obtener el campo de fecha de pago
  const fechaPagoInput = document.getElementById('fecha_pago');

  // Obtener la fecha actual en el formato YYYY-MM-DD (compatible con el input tipo date)
  function obtenerFechaActual() {
    const ahora = new Date();
    const año = ahora.getFullYear();
    let mes = ahora.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    let dia = ahora.getDate();

    // Agregar un cero inicial si el mes o el día son menores a 10
    mes = (mes < 10) ? `0${mes}` : mes;
    dia = (dia < 10) ? `0${dia}` : dia;

    // Formatear la fecha como YYYY-MM-DD
    const fechaActual = `${año}-${mes}-${dia}`;
    return fechaActual;
  }

  // Establecer la fecha de pago al valor actual al cargar la página
  fechaPagoInput.value = obtenerFechaActual();
});
  </script>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>

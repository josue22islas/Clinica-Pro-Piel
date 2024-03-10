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


   
   <link rel="stylesheet" href="css/body cross.css">
   <title>Cross Army Fitness</title>

<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener el ID del registro a editar
$id = $_GET['id'];

// Obtener los datos del registro actual de la tabla
$sql = "SELECT * FROM pagos_adeudos WHERE id=$id";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

// Cerrar la conexión
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Registro</title>
    <!-- Agregamos los estilos de Bootstrap para el diseño del formulario -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

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
  
  </style>
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



 <div class="container col-sm-5" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;"><br>   
    <div class="container col-sm-10">
        <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Editar Registro</h1><hr>
        <form action="actualizar pagos y adeudos.php" method="post">
            <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
          
            <div class="form-group">
                <label for="producto">Producto:</label>
                <input type="text" class="form-control" id="producto" name="producto" value="<?php echo $row['producto']; ?>" required>
            </div>
            <div class="form-group">
                <label for="precio">Precio:</label>
                <input type="number" class="form-control" id="precio" name="precio" value="<?php echo $row['precio']; ?>" required>
            </div>
            <div class="form-group">
                <label for="cantidad">Cantidad:</label>
                <input type="text" class="form-control" id="cantidad" name="cantidad" value="<?php echo $row['cantidad']; ?>" required>
            </div>
            <div class="form-group">
                <label for="abono">Abono:</label>
                <input type="number" class="form-control" id="abono" name="abono" value="<?php echo $row['abono']; ?>" required>
            </div>
            <div class="form-group">
                <label for="deuda">Deuda:</label>
                <input type="number" class="form-control" id="deuda" name="deuda" value="<?php echo $row['deuda']; ?>" required>
            </div>
            <div class="form-group">
                <label for="fecha_pago">Fecha de pago:</label>
                <input type="date" class="form-control" id="fecha_pago" name="fecha_pago" value="<?php echo $row['fecha_pago']; ?>"  min="<?php echo date('Y-m-d', strtotime('-1 day')); ?>" required>
            </div>
            <div class="form-group">
                <label for="estado">Estado:</label>
                <select class="form-control" id="estado" name="estado" required>
                    <option value="pagado" <?php if ($row['estado'] === "pagado") echo "selected"; ?>>Pagado</option>
                    <option value="pendiente" <?php if ($row['estado'] === "pendiente") echo "selected"; ?>>Pendiente</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary" name="guardar">Guardar Cambios</button>
            <a class="btn btn-danger" href="reporte de pagos.php">Cancelar</a>
        </form>
    </div><br><br>
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

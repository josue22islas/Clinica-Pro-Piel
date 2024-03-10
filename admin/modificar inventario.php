<?php
// Establecer la conexión con la base de datos (cambiar según tus credenciales)
$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("La conexión a la base de datos falló: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];

    // Procesar la imagen
    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
        $imagen_tmp = $_FILES['imagen']['tmp_name'];
        $imagen_data = file_get_contents($imagen_tmp);
    }

    // Consulta SQL para actualizar el registro con el ID proporcionado
    if (isset($imagen_data) && !empty($imagen_data)) {
        $sql = "UPDATE inventario SET nombre = ?, descripcion = ?, imagen = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssbi", $nombre, $descripcion, $imagen_data, $id);
    } else {
        $sql = "UPDATE inventario SET nombre = ?, descripcion = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssi", $nombre, $descripcion, $id);
    }

    if ($stmt->execute()) {
        echo "Registro modificado exitosamente.";
    } else {
        echo "Error al modificar el registro: " . $conn->error;
    }

    $stmt->close();
}

if (isset($_GET['id']) && !empty($_GET['id'])) {
    $id = $_GET['id'];

    // Consulta SQL para obtener el registro con el ID proporcionado
    $sql = "SELECT id, nombre, descripcion, imagen, fecha_de_registro FROM inventario WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        // Mostrar el formulario para modificar el registro
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
  
</head>
<body>
    
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Cross Army Fitness</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="container-fluid"> 
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="perfil admin edit.php"><i class="fas fa-user-shield"></i>/Mi Perfil <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="productos admin.php"><i class="fas fa-cart-plus" style="color: #ffffff;"></i></i>/Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="clases admin.php"><i class="fas fa-calendar-check" style="color: #edf1f7;"></i>/Clases</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="reporte de pagos.php"><i class="fas fa-hand-holding-usd" style="color: #f7f7f8;"></i>/Pagos y Adeudos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="reporte de membresias.php"><i class="fas fa-star" style="color: #ffffff;"></i>/Membresias</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="reporte de atletas.php"><i class="fas fa-dumbbell" style="color: #ffffff;"></i>/Atletas</a>
              </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false"><i class="fas fa-cog" style="color: #ffffff;"></i>
                /Mas Opciones
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="notificaciones admin.php"><i class="fas fa-bell" style="color: black;"></i>/Notificaciones</a>
                <a class="dropdown-item" href="Inventario crosfit.php"><i class="fas fa-boxes" style="color: black;"></i>/Inventario</a>
                <a class="dropdown-item" href="#"><i class="fas fa-cog" style="color: black;"></i>/Configuracion</a>
                <a class="dropdown-item" href="cerrar sesion.php"><i class="fas fa-sign-out-alt" style="color: black;"></i>/Salir</a>
              </div>
            </li>
          </ul>
        </div>
      </nav><br><br><br>


         <div class="container col-sm-4">
        <h2 class="mt-4">Modificar Registro</h2><hr>
        <form method="post" action="guardar cambios de inventario.php" enctype="multipart/form-data">
            <input type="hidden" name="id" value="<?php echo $row["id"]; ?>">
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" name="nombre" value="<?php echo $row["nombre"]; ?>">
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción:</label>
                <textarea class="form-control" name="descripcion"><?php echo $row["descripcion"]; ?></textarea>
            </div>
            <div class="form-group">
                <label for="imagen_actual">Imagen actual:</label>
                <br>
                <img src="data:image/jpeg;base64,<?php echo base64_encode($row["imagen"]); ?>" width="100">
            </div>
            <div class="form-group">
                <label for="imagen_nueva">Seleccionar nueva imagen:</label>
                <input type="file" class="form-control-file" name="imagen">
            </div>
            <!-- Agregar aquí otros campos que deseas modificar -->
            <input type="submit" class="btn btn-primary" value="Guardar cambios">
        </form>
    </div>

   <!-- Footer-->
  <br><br><br><br><br><br><br>
  <footer class="footer bg-primary text-white text-center">
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

        <?php
    } else {
        echo "ID del registro no válido.";
    }
} else {
    echo "ID del registro no proporcionado.";
}

// Cerrar la conexión
$conn->close();
?>

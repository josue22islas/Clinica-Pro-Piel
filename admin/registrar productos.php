<?php
session_start();

// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
    header('Location: login.php');
    exit;
}

      
error_reporting(0);
ini_set('display_errors', 0);

$mensaje = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"];
    $marca = $_POST["marca"];
    $cantidad = $_POST["cantidad"];
    $precio = $_POST["precio"];
    $fecha_registro = date('Y-m-d'); // Obtiene la fecha actual en el formato 'YYYY-MM-DD'

    if (!empty($_FILES["imagen"]["tmp_name"]) && file_exists($_FILES["imagen"]["tmp_name"])) {
        $maxSize = 40 * 1024 * 1024; 
        if ($_FILES["imagen"]["size"] > $maxSize) {
            $mensaje = "El tamaño de la imagen es demasiado grande. Por favor, sube una imagen de máximo 5MB.";
        } else {
            $extension = pathinfo($_FILES["imagen"]["name"], PATHINFO_EXTENSION);
            $extensionesPermitidas = array("png", "jpg", "jpeg");

            if (in_array(strtolower($extension), $extensionesPermitidas)) {
                $imagen = file_get_contents($_FILES["imagen"]["tmp_name"]);

               $servername = "localhost";
               $username = "u990524785_josue_islas";
               $password = "Erik22isla_";
               $dbname = "u990524785_cross_army";
                $conn = new mysqli($servername, $username, $password, $dbname);

                if ($conn->connect_error) {
                    die("Error en la conexión: " . $conn->connect_error);
                }

                $producto_registrado = true;

                $sql = "INSERT INTO productos (nombre, marca, precio, imagen, fecha_registro, cantidad) VALUES (?, ?, ?, ?, ?, ?)";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("ssdsss", $nombre, $marca, $precio, $imagen, $fecha_registro, $cantidad);

                if ($stmt->execute()) {
                    $mensaje = "<div class='alert alert-success'> Producto registrado correctamente.</div>";
                } else {
                    $mensaje = "<div class='alert alert-danger'> Error al registrar el producto: </div>" . $stmt->error;
                }

                $stmt->close();
                $conn->close();
            } else {
                $mensaje = "<div class='alert alert-danger'> Solo se permiten imágenes en formato PNG y JPG Y JPEG.</div>";
            }
        }
    } else {
        $mensaje = "No se ha enviado el formulario.";
    }
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
        /* Estilo para el div cuando $producto_registrado es true */
        .mensaje-exito {
            background-color: #c4f3a5;
            padding: 10px;
            border: 1px solid #4caf50;
            border-radius: 5px;
        }



#contenedorImagenInterno {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#previewImagen {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}

.navbar-logo {
  width: 45px; /* Ajusta el tamaño de la imagen*/
  height: 45px;
  border-radius: 50%; /* Esto hace que la imagen tenga forma de círculo */
  margin-right: 10px; /* Ajusta el espacio entre la imagen y el texto del navbar */
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





<div class="container col-sm-10" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;"><br>   
      <div class="container">
      
        <div class="row">
          
            <div class="col-md-4">
                <form action="#" method="post" enctype="multipart/form-data">
                <h1 class="mt-4">Registrar Producto</h1><hr>

                <div>
                <select class="btn bg-light " style="border-color: black;" id="seleccionarCategoria">
            <option value="" disabled selected style="display:none;">Selecciona una opción</option>
            <option class="text-left" value="alimentos">Alimentos</option>
            <option class="text-left" value="vestimenta">Vestimenta</option>
            <option class="text-left" value="equipos">Equipos de ejercicio</option>
        </select>
        <button class="btn btn-dark" onclick="redireccionar()">Ir a la categoría</button>
    </div><br>


                    <div class="form-group">
                        <label for="nombre">Nombre del producto:</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Ingrese nombre del producto" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label for="marca">Marca:</label>
                        <input type="text" id="marca" name="marca" placeholder="Ingrese marca del producto" class="form-control" required>
                    </div>

                    <div class="form-group">
                    <label for="cantidad">Cantidad:</label>
            <select class="form-control" id="cantidad" name="cantidad" required>
              <option value="">Ingrese cantidad de producto . . .</option>
                <option value="1 Unidad">1 Unidad</option>
                <option value="2 Unidades">2 Unidades</option>
                <option value="3 Unidades">3 Unidades</option>
                <option value="4 Unidades">4 Unidades</option>
            </select>
                    </div>

                    <div class="form-group">
                        <label for="precio">Precio:</label>
                        <input type="number" step="0.01" id="precio" name="precio" placeholder="Agrega una cantidad" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label for="imagen" class="text-primary">Imagen del producto (Solo formatos PNG, JPEG):</label>
                        <input type="file" id="imagen" name="imagen" accept="image/*" class="form-control-file" required>
                    </div>

                    <button type="submit" class="btn btn-primary">Registrar</button>
                    <a class="btn btn-danger" href="productos admin.php">Cancelar</a>
                </form>

                <p><?php echo $mensaje; ?></p><br>


    </div>

    <div class="col-md-8">
    <div class="mx-auto text-center" style="max-width: 300px; "><br><br><br><br><br>
        <div id="contenedorImagen" style="background-color: #f0f0f0; border: 2px dashed #ccc; padding: 20px; height: 400px; position: relative; overflow: hidden;">
            
            <div id="contenedorImagenInterno" style="max-height: 100%; overflow: hidden;">
                <img id="previewImagen" src="" alt="Vista previa de la imagen" style="width: 100%; height: auto; max-height: 100%;">
            </div>
        </div><br><br>
    </div>
</div>



            </div>
        </div>
    </div>
  </div>
   
   
   
     

  <!-- Footer-->
  <br><br>
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
    /////////////script para redireccionar al seleccionar una categoria/////////////////
        function redireccionar() {
            var categoria = document.getElementById("seleccionarCategoria").value;
            if (categoria === "alimentos") {
                window.location.href = "registrar productos.php";
            } else if (categoria === "vestimenta") {
                window.location.href = "registrar vestimenta.php";
            } else if (categoria === "equipos") {
                window.location.href = "registrar equipos.php";
            }
        }

///////////////script de cargar imagen del producto y se vizualise////////////////////////
        document.getElementById('imagen').addEventListener('change', function() {
        var previewImagen = document.getElementById('previewImagen');
        var file = this.files[0];
        var reader = new FileReader();

        reader.onload = function() {
            previewImagen.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            previewImagen.src = "";
        }
    });
    </script>


  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>




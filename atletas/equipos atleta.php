<?php
// Iniciar sesión
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
  
 


        .navbar-logo {
  width: 45px; /* Ajusta el tamaño de la imagen*/
  height: 45px;
  border-radius: 50%; /* Esto hace que la imagen tenga forma de círculo */
  margin-right: 10px; /* Ajusta el espacio entre la imagen y el texto del navbar */
}

.custom-opacity {
    
    opacity: 0.9;
 background: #019acc; 
background: -webkit-linear-gradient(to bottom, #fff, #019acc); 
background: linear-gradient(to bottom, #fff, #019acc); 
  /* background: rgba(255, 251, 251, 0.836); */
   

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
              <a class="nav-link" href="equipos atleta.php"><i class="fas fa-cart-plus" style="color: #ffffff;"></i></i>/Productos</a>
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
              <div class="container-fluid col-lg-3 col-md-6"> <!-- Utiliza col-lg-3 para tamaños grandes y col-md-6 para tamaños medianos -->
                 <form class="d-flex" method="post" action="#">
                   <input class="form-control me-2" type="search" name="searchInput" placeholder="Buscar Producto" aria-label="Search" required style="min-width: 200px;"> <!-- Ajusta el ancho mínimo que desees -->
                   <button id="buscarBtn" class="btn btn-light mx-2" type="submit">Buscar</button>
                 </form>
               </div>
            </li>
          </ul>
        </div>
      </nav><br><br><br><br>



      <div class="container col-11" style="background-color: rgba(8, 108, 248, 0.9); border-radius:10px;"><br>

      <div class="container-responsive m-0 row justify-content-center">
  <h1 style="font-size:75px; color: white; text-align:center;"> Cross Army Fitness </h1>
</div><hr class="bg-white">


    <div class="container mt-4">
        <div class="title-cards">
            <h1 style="text-align: center; color: white;"><img src="img/heading_iconw.png" alt="#"/> Catálogo de productos </h1>
            <div class="m-0 row justify-content-center"><a><img src="img/logoCA.png" alt="" width="170"></a></div>
        

            <select class="btn btn-light" id="seleccionarCategoria">
<option value="" disabled selected style="display:none;">Selecciona una opción</option>
            <option class="text-left" value="alimentos">Alimentos</option>
            <option class="text-left" value="vestimenta">Vestimenta</option>
            <option class="text-left" value="equipos">Equipos de ejercicio</option>
        </select>
        <button class="btn btn-dark" onclick="redireccionar()">Ir a la categoría</button>
            <hr class="bg-warning">
        </div>

        <div class="row">
        <?php
            // Conexión a la base de datos (reemplaza con tus propios datos)
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "cross_army_fitness";
            $conn = new mysqli($servername, $username, $password, $dbname);

            if ($conn->connect_error) {
                die("Error en la conexión: " . $conn->connect_error);
            }

               // Verificar si se ha enviado el formulario de búsqueda
               if(isset($_POST['searchInput'])) {
                $searchInput = $_POST['searchInput'];
                // Construir consulta SQL para buscar productos por nombre, marca o precio
                $sql = "SELECT id, nombre, marca, cantidad, imagen, precio FROM productos_accesorios WHERE ESTATUS = 'activo' AND (nombre LIKE '%$searchInput%' OR marca LIKE '%$searchInput%' OR precio LIKE '%$searchInput%')";
            } else {
                // Si no se envió el formulario de búsqueda, obtener todos los productos con estatus activo
                $sql = "SELECT id, nombre, marca, cantidad, imagen, precio FROM productos_accesorios WHERE ESTATUS = 'activo'";
            }

            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // Mostrar los productos en la página
                while ($row = $result->fetch_assoc()) {
                    $id = $row["id"];
                    $nombre = $row["nombre"];
                    $marca = $row["marca"];
                    $cantidad = $row["cantidad"];
                    $imagen = base64_encode($row["imagen"]);
                    $precio = $row["precio"]; // Obtenemos el precio del producto

                    echo '<div class="col-md-4"><br>';
                    echo '<div class="producto">';
                    echo '<img src="data:image/jpeg;base64,' . $imagen . '" alt="' . $nombre . '" class="img-fluid imagen-productos" data-id="' . $id . '">';
                    echo '<div class="producto-info">';
                    echo '<div class="bg-white" style="padding: 20px;"><h2><hr>' . $nombre . '</h2><br>';
                    echo '<p><b>Marca:</b> ' . $marca . '</p>';
                    echo '<p><b>Cantidad:</b> ' . $cantidad . '</p>';
                    echo '<p><b>Precio:</b> $' . number_format($precio, 2) . ' MXN</p></div>'; // Mostramos el precio formateado con dos decimales
                    echo '</div>';
                    echo '</div>';
                    echo '</div>';
                    
                }
            } else {
              echo "<div class='container m-0 row justify-content-center'>";
              echo "<div class='alert alert-secondary col-8 text-center text-primary'>No se encontraron productos.</div>";
              echo "</div>";
              echo "<div class='container m-0 row justify-content-center'><i class='fas fa-cart-plus fa-5x' style='color: #ffffff;'></i></div>";
            }

            $conn->close();
            ?>
                    </div>
        </div><br><br><br>
    </div><br>
      

     

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
        function redireccionar() {
            var categoria = document.getElementById("seleccionarCategoria").value;
            if (categoria === "alimentos") {
                window.location.href = "productos.php";
            } else if (categoria === "vestimenta") {
                window.location.href = "vestimenta atleta.php";
            } else if (categoria === "equipos") {
                window.location.href = "equipos atleta.php";
            }
        }

        
////////////////script de titulos de productos///////////////////////////////////////
        document.addEventListener('DOMContentLoaded', function() {
    const h2Elements = document.querySelectorAll('.producto-info h2');

    h2Elements.forEach(function(h2) {
        h2.setAttribute('title', h2.textContent);
    });
});


///////////Agregamos el script JavaScript para el click sobre la imagen que tiene su clase class="img-fluid imagen-galeria" ///////

    document.addEventListener('DOMContentLoaded', function() {
        var imagenes = document.querySelectorAll('.imagen-productos');
        imagenes.forEach(function(imagen) {
            imagen.addEventListener('click', function() {
                var id = this.getAttribute('data-id');
                window.location.href = 'ver_equipo_grande.php?id=' + id;
            });
        });
    });

    </script>

  
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>




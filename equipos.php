
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <!--Contenido agregado CDN de Bootstrap-->
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
       integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    <link rel="icon" href="icon/logos.jpg">


    <title>Cross Army Fitness</title>

    <style>
   .producto img {
    width: 400px; /* Establece un ancho fijo */
    height: 400px; /* Establece una altura fija */
    object-fit: cover;
    padding: 10px;
    background-color: white;
}

body {
  background-color:rgb(252, 206, 39);
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
</head>
<body>

<div class="container col-11" style="background-color: blue;"><br>



<div class="container-responsive m-0 row justify-content-center">
  <h1 style="font-size:75px; color: white; text-align:center;"> Cross Army Fitness </h1>
</div><hr class="bg-white">



    <div class="container mt-4">
        <div class="title-cards">
            <h1 style="text-align: center; color: white;"><img src="images/heading_iconw.png" alt="#"/>  Catálogo de productos </h1>
            <div class="m-0 row justify-content-center"><a href="index.html"><img src="img/logoCA.png" alt="" width="170"></a></div>
            
            

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
         require_once("conex_db/conex_db.php");

            $sql = "SELECT id, nombre, marca, cantidad, imagen, precio FROM productos_accesorios WHERE ESTATUS = 'activo'"; // Agregamos el campo "precio" a la consulta
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
    </div><br>


    <div class="container bg-white border border-primary border rounded p-5"><!---darle bordes ala clase de bostrap  border rounded p-4---->
  <div class="row">
    <div class="col-12">
    <p class="text-justify"><h2 style="text-align:left;">¡Acerca de!</h2></p><hr>
      <p class="text-justify">¡Bienvenido al catálogo de nuestros productos de CrossFit! Estamos emocionados de presentarte nuestra selección de equipos y accesorios diseñados específicamente para mejorar tus entrenamientos de CrossFit.</p>
      <p class="text-justify">Sin embargo, queremos informarte de que estos productos solo están disponibles para su compra en nuestro establecimiento.</p>
      <p class="text-justify">Lamentablemente, no ofrecemos la opción de compra en línea para los productos de CrossFit que se muestran en este catálogo. Creemos en la importancia de la interacción personal y en brindarte una experiencia de compra única en nuestro establecimiento. Aquí podrás comprar nuestros productos, recibir consejos de nuestros profesionales y asegurarte de que estás tomando una decisión informada.</p>
      <p class="text-justify">Así que te invitamos a visitar nuestro establecimiento y descubrir nuestra amplia selección de productos de CrossFit. Estamos seguros de que encontrarás todo lo que necesitas para llevar tus entrenamientos al siguiente nivel y alcanzar tus objetivos fitness.</p>
    </div>
  </div>
</div>

<br>
<div class="m-0 row justify-content-center"><a href="index.html" class="btn btn-success">Regresar</a></div>
<br><br>


</div>

     





    
      

    <!-- Scripts de Bootstrap y jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

    
<!-- Footer-->
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
                window.location.href = "vestimenta.php";
            } else if (categoria === "equipos") {
                window.location.href = "equipos.php";
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
    
</body>
</html>




















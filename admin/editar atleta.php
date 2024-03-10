<?php
session_start();
// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
  header('Location: ../login.php');
  exit;
}

$servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

// la variable GET va a permitir obtener el campo ID de la DB a través de una consulta $sql
if ($_GET['id']) {
    $id = $_GET['id'];

    // implementamos $sql para la consulta
    $sql = "SELECT * FROM usuarios WHERE id = {$id}";
    $result = $conn->query($sql);

    // creamos una variable llamada $data para crear un array asociativo
    $data = $result->fetch_assoc();

    // cerramos la conexión a la DB
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
                <a class="dropdown-item" href="#"><i class="fas fa-bell" style="color: black;"></i>/Notificaciones</a>
                <a class="dropdown-item" href="#"><i class="fas fa-boxes" style="color: black;"></i>/Inventario</a>
                <a class="dropdown-item" href="#"><i class="fas fa-cog" style="color: black;"></i>/Configuracion</a>
                <a class="dropdown-item" href="cerrar sesion.php"><i class="fas fa-sign-out-alt" style="color: black;"></i>/Cerrar sesión</a>
              </div>
            </li>
          </ul>
        </div>
      </nav><br><br><br>

      <div class="container col-sm-10" style="background-color: rgba(255, 255, 255, 0.9);  border-radius:10px;">
<div class="container mt-5"><br><br>
    <div class="row">
        <div class="col-lg-4">
            <div class="card mb-4">
                <div class="card-body text-center">
                <?php if (!empty($data['imagen'])) : ?>
                        <img src='data:image/jpeg;base64,<?= base64_encode($data['imagen']) ?>' alt='Imagen de Perfil' width='150' height='150'>
                    <?php else : ?>
                      <div class="fas fa-camera fa-5x d-flex justify-content-center align-items-center col-lg-12" style="height: 150px; background-color: #ccc;"></div>
                    <?php endif; ?>
                        <h5 class="my-3">Imagen de perfil</h5>
                      
                      <div class="d-flex justify-content-center mb-2">
                        <div class="alert alert-primary">
                        <span class="text-primary"><i class="fas fa-info-circle"></i> !importante:</span>
                          <p class="text-muted" style="text-align:justify; padding: 0 8px;"> Cross Army Fitness se compromete a proteger la información que procesa haciendo todo lo posible para garantizar que esta se utilice 
                          solo para ayudar a sus usuarios para que tengan una mayor seguridad y privacidad de sus datos. </p>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="card mb-4 mb-lg-0">
                    <div class="card-body p-0">
                        <ul class="list-group list-group-flush rounded-3">
                            <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                            <a href="#!"><i class="fas fa-envelope" style="color: #186bfb;"></i></a>
                                <p class="mb-0"><?php echo $data['email']; ?></p>
                                <div class="d-flex justify-content-start">
                    </div>

                      </li>
                            <!-- Agregar más elementos de la lista si es necesario-->
                        </ul>
                    </div>
                </div>
            </div>
            

            <!-- nuestro contendido de la tabla -->
            <div class="col-lg-8">
            <div class="card mb-4">
                <div class="card-body">
                    <form action="php_action/edit.php" method="post">
                        <div class="table">
                            <table class="table table-light">

                            <div class="row">
                            <div class="col-sm-10">
                            <h2 class="mb-0 text-muted">Editar información</h2>
                        </div>
                      </div>
                        <hr>
               
               <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Nombre:</p>
                       </div>
                          <div class="col-sm-9">
                            <div class="input-group">
                               <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Escribir tu nombre" value="<?php echo $data['nombre'] ?>">
                                 <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-edit"></i></span>
                                </div>
                              </div>
                            </div>
                        </div><hr>

                        <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Correo:</p>
                       </div>
                            <div class="col-sm-9">
                            <div class="input-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Escribir tu correo" value="<?php echo $data['email']?>" disabled >
                              <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-lock"></i></span>
                                </div>
                              </div>
                            </div>
                        </div><hr>

                        <div class="row">
                <div class="col-sm-3">
                   <p class="mb-0">Contraseña:</p>
                     </div>
                          <div class="col-sm-9">
                          <div class="input-group">
                           <input type="password" class="form-control" name="contraseña" id="contraseña" placeholder="Escribir tu email" value="<?php echo $data['contraseña']?>" disabled>
                           <div class="input-group-append">
                                <span class="input-group-text" ><i class="fas fa-lock"></i></span><!-- agrega el id="toggleEmail" style="cursor: pointer;" para el comportamiento con el script  -->
                              </div>
                           </div>
                         </div>
                      </div>
                    <hr>

                
                        <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Ciudad:</p>
                       </div>
                            <div class="col-sm-9">
                            <div class="input-group">
                             <input type="text" class="form-control" name="ciudad" id="ciudad" placeholder="Escribir tu ciudad" value="<?php echo $data['ciudad']?>" required >
                             <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-edit"></i></span>
                                </div>
                              </div>
                          </div>
                        </div><hr>

                        <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Código postal:</p>
                       </div>
                            <div class="col-sm-9">
                            <div class="input-group">
                             <input type="number" class="form-control" name="codigo_postal" id="codigo_postal" placeholder="Escribir código postal" value="<?php echo $data['codigo_postal']?>" required >
                             <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-edit"></i></span>
                                </div>
                              </div>
                          </div>
                        </div><hr>

                        <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Código de país:</p>
                       </div>
                            <div class="col-sm-9">
                            <div class="input-group">
                               <select class="form-control" name="pais_codigo" id="pais_codigo" >
                                 <option value="+01" <?php echo ($data['pais_codigo'] == '+01') ? 'selected' : '' ?>>+01</option>
                                 <option value="+52" <?php echo ($data['pais_codigo'] == '+52') ? 'selected' : '' ?>>+52</option>
                               </select>
                               <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-edit"></i></span>
                                </div>
                              </div>
                            </div>
                        </div><hr>

                        <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Teléfono:</p>
                       </div>
                            <div class="col-sm-9">
                            <div class="input-group">
                             <input type="tel" class="form-control" name="telefono" id="telefono" placeholder="Escribir tu numero" value="<?php echo $data['telefono']?>" required >
                             <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-edit"></i></span>
                                </div>
                              </div>
                            </div>
                        </div><hr>

                        <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Edad:</p>
                       </div>
                            <div class="col-sm-9">
                            <div class="input-group">
                             <input type="number" class="form-control" name="edad" id="edad" placeholder="Escribir tu edad" value="<?php echo $data['edad']?>" min="18" max="70" required >
                             <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-edit"></i></span>
                                </div>
                              </div>
                            </div>
                        </div><hr>

                        <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Sexo:</p>
                       </div>
                            <div class="col-sm-9">
                            <div class="input-group">
                              <select class="form-control" name="sexo" id="sexo">
                               <option value="" <?php echo ($data['sexo'] == '') ? 'selected' : ''; ?>>...</option>
                               <option value="Masculino" <?php echo ($data['sexo'] == 'Masculino') ? 'selected' : ''; ?>>Masculino</option>
                               <option value="Femenino" <?php echo ($data['sexo'] == 'Femenino') ? 'selected' : ''; ?>>Femenino</option>
                               <option value="Indistinto" <?php echo ($data['sexo'] == 'Indistinto') ? 'selected' : ''; ?>>Indistinto</option>
                              </select>
                              <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-edit"></i></span>
                                </div>
                              </div>
                            </div>
                        </div><hr>

                
                        <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Categoría:</p>
                       </div>
                            <div class="col-sm-9">
                            <div class="input-group">
                              <select class="form-control" name="categoria" id="categoria" required>
                                <option value="Principiante" <?php echo ($data['categoria'] == 'Principiante') ? 'selected' : '' ?>>Principiante</option>
                                <option value="Intermedio" <?php echo ($data['categoria'] == 'Intermedio') ? 'selected' : '' ?>>Intermedio</option>
                                <option value="Avanzado" <?php echo ($data['categoria'] == 'Avanzado') ? 'selected' : '' ?>>Avanzado</option>
                             </select>
                             <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-edit"></i></span>
                                </div>
                              </div>
                            </div>
                        </div><hr>

                        <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Fecha de registro:</p>
                       </div>
                            <div class="col-sm-9">
                            <div class="input-group">
                              <input type="date" class="form-control" name="fecha_registro" id="fecha_registro" placeholder="Escribir tu numero" value="<?php echo $data['fecha_registro']?>" required >
                              <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-edit"></i></span>
                                </div>
                              </div>
                            </div>
                        </div><hr>

               

            
              </table>
                        <div>
                            <input type="hidden" name="id" value="<?php echo $data['id']?>">
                               <button class="btn btn-primary" type="submit">Actualizar</button>
                    
                            <a  href="reporte de atletas.php"><button class="btn btn-success" type="button">Regresar</button></a>
                         </div>
                      

                      </div>
                 </div>
            </div>
        </div>
    </div>
</div>


                        </form><br>
                  </fieldset>
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
 
</body>
</html>


<?php



?>



<!----este codigo de script me ayuda a darle la animacion de separacion de los digitos numericos de La función input toma el valor del 
campo de entrada, elimina cualquier carácter que no sea un número y luego agrega los guiones de separación en el número de teléfono según su longitud.-->
<script>
document.getElementById('telefono').addEventListener('input', function(event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, ''); // Elimina cualquier carácter que no sea un número
  
  if (value.length > 0) {
    if (value.length <= 3) {
      input.value = value;
    } else if (value.length <= 6) {
      input.value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length <= 10) {
      input.value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
    } else {
      input.value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
    }
  }
});
</script>



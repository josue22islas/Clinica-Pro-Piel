<?php
session_start();
// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
  header('Location: ../login privilegiados.php');
  exit;
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cross_army_fitness";

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
  .modal-dialog {
  margin-top: 80px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
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
                      <div class="fas fa-camera fa-5x d-flex justify-content-center align-items-center" style="width: 308px; height: 150px; background-color: #ccc;"></div>
                    <?php endif; ?>
                        <h5 class="my-3">Imagen de perfil</h5>
                      
                        <div class="d-flex justify-content-center mb-2">
                        <div class="alert alert-warning">
                        <span class="text-warning"><i class="fas fa-exclamation-triangle fa-1x"></i></span><!---aumenta el tamano del icono fa-2x --->
                        <p class="text-muted" style="text-align:justify; padding: 0 8px;"> Por favor realicé los cambios pertinentes en la contraseña o de lo contrario cancele, no actualicé si no realiza el 
                            cambio para evitar perdida de las credenciales de acceso por seguridad! </p>
                            <span><a href="#" data-toggle="modal" data-target="#miModal">Click para más información</a></span><!----agregamos el id de nuestro modal---->

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
                    <form action="php_action/edit2.php" method="post">
                        <div class="table">
                            <table class="table table-light">
               
                            <div class="row">
                            <div class="col-sm-10">
                            <h2 class="mb-0 text-muted">Ingrese nuevo correo o contraseña</h2>
                        </div>
                      </div>
                        <hr>
                     

                        <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Correo:</p>
                       </div>
                            <div class="col-sm-9">
                            <div class="input-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Escribir tu email" value="<?php echo $data['email']?>">
                              <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-edit"></i></span>
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
            <input type="password" class="form-control" name="contraseña" id="contraseña" placeholder="Escribir tu email" value="<?php echo $data['contraseña']?>" required >
            <div class="input-group-append">
                <span class="input-group-text" ><i class="fas fa-edit"></i></span><!-- agrega el id="toggleEmail" style="cursor: pointer;" para el comportamiento con el script  -->
            </div>
        </div>
    </div>
</div>
<hr>

<div class="alert alert-warning">
   <p class="text-muted" style="text-align:center;"><span class="text-warning"><i class="fas fa-exclamation-triangle fa-3x"></i></span> <br>!No actualize sin antes haber realizado cambios en la contraseña por seguridad o de lo contrario de click en <span class="text-danger">cancelar!</span></p>
</div>
                 
                
                   

               

            
              </table>
                        <div>
                            <input type="hidden" name="id" value="<?php echo $data['id']?>">
                               <button class="btn btn-primary" type="submit">Actualizar</button>
                    
                            <a  href="reporte de atletas.php"><button class="btn btn-danger" type="button">Cancelar</button></a>
                         </div>
                      

                      </div>
                 </div>
            </div>
        </div>
    </div>
</div>

         <!----nuestro modal para agregar un texto informativo ---->
    
         <div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="miModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="miModalLabel"><b>Importancia de Actualizar Contraseñas y la Encriptación</b></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="alert alert-success" style="text-align:justify;">
        <p>Cuando se actualiza una contraseña por motivos de seguridad, es posible que se requiera cambiar la clave encriptada 
            asociada a esa cuenta. Esto se debe a que la encriptación de contraseñas utiliza algoritmos matemáticos para convertir la contraseña 
            original en una forma ilegible y segura. Si la contraseña cambia, la clave encriptada también debe actualizarse para reflejar el nuevo valor.</p><br>
       
           <h5><strong>Aquí hay algunas razones por las que es crucial actualizar la contraseña encriptada al cambiar la contraseña:</strong></h5><br>

           <ul><li><strong>Mantenimiento de la Seguridad:</strong> La encriptación es fundamental para proteger las contraseñas almacenadas en bases de datos. Si no se actualiza la clave 
            encriptada después de cambiar la contraseña, la antigua seguirá siendo válida, lo que podría dar lugar a vulnerabilidades de seguridad.</li><br>
           <li><strong>Evita el Uso Indebido de Credenciales Robadas:</strong> Si una base de datos es comprometida y las contraseñas son filtradas, 
            cambiarlas rápidamente evita que los atacantes utilicen esas credenciales para acceder a tus cuentas.</li> <br>
           <li><strong>Protege tu Privacidad y Datos Sensibles:</strong> Las cuentas en línea a menudo contienen información personal y financiera valiosa. Al cambiar tus contraseñas, 
            reduces la exposición de esta información a posibles amenazas.</li><br>
           <li><strong>Cumplimiento de Requisitos de Seguridad:</strong> Algunas plataformas y servicios requieren que los usuarios cambien sus contraseñas regularmente como parte de las
             políticas de seguridad. No cumplir con estas políticas puede poner en riesgo tus cuentas.</li><br>
           <li><strong>Mantén el Control de tus Cuentas:</strong> Al actualizar tus contraseñas, mantienes el control sobre quién tiene acceso a tus cuentas. Si has compartido tu contraseña previamente,
             cambiarla garantiza que solo tú tengas el acceso.</li><br>
           <li><strong>Prevención contra Ataques de Fuerza Bruta:</strong> Los ataques de fuerza bruta intentan adivinar contraseñas probando múltiples combinaciones. Cambiar las contraseñas hace que este 
            tipo de ataques sean menos efectivos.</li>
          </ul>
          <br>

          <p class="alert alert-warning"><i class="fas fa-exclamation-triangle"></i> Recuerda que al actualizar tus contraseñas, es importante crear combinaciones 
          seguras que incluyan letras mayúsculas, minúsculas, números y caracteres especiales. Evita utilizar información personal fácilmente accesible o prediccible, como fechas de nacimiento o nombres comunes.

          Siguiendo estas prácticas, estarás fortaleciendo la seguridad de tus cuentas en línea y protegiendo tu información personal de posibles amenazas cibernéticas.</p>
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>


                        </form>
                  </fieldset>
               </div><br><br><br>
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



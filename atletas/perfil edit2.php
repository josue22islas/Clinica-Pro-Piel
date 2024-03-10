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
$sql = "SELECT * FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $userInformation = $result->fetch_assoc();
} else {
    echo "Usuario no encontrado";
}

$conn->close();
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

table {
    border-collapse: collapse;
    width: 100%;
    font-family: Arial, sans-serif; /* Cambia la fuente según tus preferencias */
}

th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}
 tr{
  background-color: #f9f9f9;
 }



   
    .profile-image img {
    width: 250px; /* Establece un ancho fijo para la imagen */
    height: 250px; /* Establece una altura fija para la imagen */
    border: 5px solid #ccc; /* Añade un borde para resaltar la imagen */
    border-radius: 5px; /* Añade bordes redondeados */
    object-fit: cover; /* Ajusta la imagen dentro del contenedor sin deformarla */
}


.navbar-logo {
  width: 45px; /* Ajusta el tamaño de la imagen*/
  height: 45px;
  border-radius: 50%; /* Esto hace que la imagen tenga forma de círculo */
  margin-right: 10px; /* Ajusta el espacio entre la imagen y el texto del navbar */
}



 /* separacion de codigos */  
 
 .perfil-usuario {
    background: linear-gradient(#3FD0F4, transparent);
    color: #333;
}
.perfil-usuario .sombra {
    position: absolute;
    display: block;
    background: linear-gradient(transparent,rgba(254, 253, 253, 0.696));
    width: 100%;
    height: 50%;
    bottom: 0;
    left: 0;
    
}
.perfil-usuario .portada-perfil,
.perfil-usuario .sombra {
    border-radius: 0 0 20px 20px;
}
.perfil-usuario img {
    width: 100%;
}
.contenedor-perfil {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
}
.perfil-usuario .contenedor-perfil {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
}
.perfil-usuario .portada-perfil {
    display: block;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    height: 20rem;
    margin-bottom: .5rem;
}
.perfil-usuario .avatar-perfil {
    display: block;
    width: 230px;
    height: 230px;
    background-color: #D9DCF1;
    position: absolute;
    bottom: -65px;
    left: 4rem;
    border-radius: 50%;
    overflow: hidden;
    border: 8px solid #FFFFFF;
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, .2);
}
.perfil-usuario .cambiar-foto {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .5);
    height: 57%;
    bottom: 0;
    left: 0;
    color: #fff;
    text-decoration: none;
    transform: translateY(50%);
    opacity: 0;
    transition: all ease-in 200ms;
}
.perfil-usuario .cambiar-foto i {
    margin-bottom: .5rem;
    font-size: 2rem;
}
.perfil-usuario .avatar-perfil:hover .cambiar-foto {
    transform: translateY(0);
    opacity: 1;
}
.perfil-usuario .datos-perfil {
    position: absolute;
    display: block;
    width: calc(100% - 230px - 8rem);
    right: 0;
    bottom: 0;
    color: #0c0c0c; /* aqui cambia color de texto del dato del usuario */  
    text-shadow: 0 0 5px rgba(0, 0, 0, .2);
    padding-bottom: 1rem;
    padding-right: 1rem;
}
.perfil-usuario .titulo-usuario {
    font-size: 2.3rem;
    white-space: nowrap;
    margin-bottom: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.perfil-usuario .bio-usuario {
    font-size: 1em;
    margin-bottom: .75rem;
}
.perfil-usuario .lista-perfil {
    list-style: none;
}
.perfil-usuario .lista-perfil li {
    display: inline-block;
    font-size: 1em;
    margin-right: 1rem;
}

.perfil-usuario .opcciones-perfil {
    display: block;
    position: absolute;
    right: 2rem;
    top: 1rem;
}
.perfil-usuario .opcciones-perfil button {
    border: 0;
    padding: 8px 20px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    cursor: pointer;
}
.perfil-usuario .menu-perfil ul {
    display: flex;
    list-style: none;
    margin-left: calc(200px + 8rem);
    width: calc(100% - 200px - 8rem);
}
.perfil-usuario .menu-perfil ul li {
    margin-right: 1rem;
}
.perfil-usuario .menu-perfil a {
    display: block;
    text-decoration: none;
    color: white;
    padding: 8px 20px;
    font-weight: bold;
    border-radius: 8px;
    transition: all ease-in 100ms;
}
.perfil-usuario .menu-perfil a:hover {
    background-color: #4CB0C6;
    color: #0c0c0c;
}
.perfil-usuario .icono-perfil {
    display: none;
    margin-right: .75rem;
}
@media (max-width: 780px) {
    .perfil-usuario .contenedor-perfil {
        width: 100%;
    }
    .perfil-usuario .avatar-perfil {
        left: calc(50% - 115px)
    }
    .perfil-usuario .datos-perfil {
        bottom: 200px;
        left: 0;
        width: 100%;
        padding: 15px;
        text-align: center;
    }
    .perfil-usuario .bio-usuario {
        font-size: 1em;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .perfil-usuario .titulo-usuario {
        font-size: 2.1rem;
    }
    .perfil-usuario .portada-perfil {
        height: 28rem;
    }
    .perfil-usuario .menu-perfil ul {
        flex-direction: column;
    }
    .perfil-usuario .lista-perfil {
        display: block;
    }
    .perfil-usuario .menu-perfil {
        margin-top: 2rem;
    }
    .perfil-usuario .menu-perfil ul {
        display: flex;
        list-style: none;
        margin-left: auto;
        margin-right: auto;
        padding-top: 2.5rem;
        width: 90%;
        background-color: #ffffff00;
        border-radius: 12px;
        box-shadow: 0 0 12px 2px rgba(0, 0, 0, .1);
    }
    .perfil-usuario .icono-perfil {
        display: inline-block;
    }
}

.avatar-perfil img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.no-opacity {
    opacity: 1 !important; /* Establece la opacidad de los botones a 1 */
}


.modal-dialog {
  margin-top: 100px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
}

/* forzar la aparición permanente de la barra de desplazamiento sin que afecte el tamaño del contenido cuando el modal está activo*/
body.modal-open {
  padding-right: 0 !important;
  overflow: auto !important;
}
/* Este código se centra en anular los estilos que Bootstrap aplica automáticamente al abrir el
 modal para evitar que se oculte la barra de desplazamiento y que el contenido cambie su tamaño.*/

.responsive-text {

  font-size: 2.0em; /* Tamaño del texto para pantallas normales */

  /* Media Query para dispositivos móviles */
  @media only screen and (max-width: 600px) {
    font-size: 1.5em; /* Tamaño del texto para pantallas más pequeñas */
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
      </nav>



    
      <section class="perfil-usuario"  >
    <div class="contenedor-perfil">
        <div class="portada-perfil" style="background-image: url('http://localhost/multimedia/relleno/fondo-9.png');">
            <div class="sombra"></div>

            <div class="avatar-perfil" >
            <?php if (!empty($userInformation['imagen'])) : ?>
                <img src='data:image/jpeg;base64,<?= base64_encode($userInformation['imagen']) ?>' alt='Imagen de Perfil' class="img-fluid imagen-perfil" data-id="<?= $id ?>" id="perfil-imagen">
    <?php else : ?>
        <div class="d-flex justify-content-center align-items-center" style="width: 215px; height: 211px; background-color: #ccc; border-radius: 50%;"><!-- icono y estilos para centrar  cuando el contenedor este vacio-->
            <i class="fas fa-camera fa-5x"></i>
        </div>
    <?php endif; ?>
              
                  
                </a>
            </div>
            <div class="datos-perfil"><br>
           
                <h4 class="titulo-usuario">¡Bienvenido: <?php echo $userInformation['nombre']; ?>!</h4>
                 <p class="bio-usuario"><b><i class="fas fa-envelope fa-sm"></i>  <?php echo $userInformation['email']; ?></b></p>
                <ul class="lista-perfil">
                    <li><a style="color:blue;" href="img perfil.php"><i class="fas fa-camera"></i><b> Cambiar foto de perfil</b></li></a>
                    <li><a style="color:blue;" href="#"><i class="fas fa-cog"></i><b> Configuraciones</b></li></a>
                    <li><a style="color:blue;" href="#"><i class="fas fa-book"></i><b> Mi blog</li></b></a>
                </ul>
            </div>
            <div class="opcciones-perfil">
                <button type="">Cambiar portada</button>
                <button type=""><i class="fas fa-wrench"></i></button>
            </div>
         <a href="inicio.php">Regresar al inicio</a>

        </div>
        <div class="menu-perfil">
            <ul>
            <li class="my-2"><a id="abrirModal2" style="background-color: #209ff4;" href="#" title=""><i class="fas fa-bell"></i> / Notificaciones</a></li>
               
               <li class="my-2"><a id="abrirModal" style="background-color: #209ff4;" href="#" title=""><i class="fas fa-envelope"></i> / Enviar Mensaje</a></li>

               <li class="my-2"><a style="background-color: #209ff4;" href="galeria de usuario.php" title=""><i class="fas fa-camera"></i> / Galería</a></li>
            </ul>
        </div>
    </div>
</section>

     

       <!---------------modal de contenedor de envio de  mensaje------------------------------------------------------------->

 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
  <!-- Contenido del modal -->
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel"><i class="fas fa-envelope"></i> Enviar Mensaje</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- Tu formulario PHP aquí -->

        <form method="post" action="enviar_mensaje.php">
          <!-- ... Campos del formulario ... -->
          
          <div class="form-group" style="display:none;">
    <label for="remitente"><i class="fas fa-user"></i> De:</label>
    <select name="remitente" id="remitente" class="form-control" disabled>
        <?php
        // Conexión a la base de datos
        $conexion = mysqli_connect("localhost", "root", "", "cross_army_fitness");

        $query = "SELECT * FROM usuarios";
        $result = mysqli_query($conexion, $query);

        while ($row = mysqli_fetch_assoc($result)) {
            // Agregamos el atributo "selected" al option que tenga el ID del usuario logeado
            $selected = ($_SESSION['id'] == $row['id']) ? 'selected' : '';
            echo "<option value='" . $row['id'] . "|" . $row['nombre'] . "' $selected>" . $row['nombre'] . " " . $row[''] . "</option>";
        }

        // Cerrar conexión
        mysqli_close($conexion);
        ?>
    </select>
</div>

<div class="form-group">
    <label for="receptor"><i class="fas fa-user"></i> Para:</label>
    <select name="receptor" id="receptor" class="form-control">
    <option value="" disabled selected>Selecciona atleta...</option>
    <?php
            // Conexión a la base de datos
            $conexion = mysqli_connect("localhost", "root", "", "cross_army_fitness");

            // ID del usuario actual
            $usuario_id = $_SESSION['id']; // Usamos el ID del usuario logeado

            $query = "SELECT * FROM usuarios WHERE id != $usuario_id"; // Excluir al usuario logeado
            $result = mysqli_query($conexion, $query);

            while ($row = mysqli_fetch_assoc($result)) {
                echo "<option value='" . $row['id'] . "'>" . $row['nombre'] . " " . $row[''] . "</option>";
            }

            // Cerrar conexión
            mysqli_close($conexion);
            ?>
    </select>
</div>

<div class="form-group">
    <label for="contenido"><i class="fas fa-envelope"></i> Mensaje:</label>
    <textarea name="contenido" id="contenido" class="form-control" placeholder="Escribe tu mensaje..." cols="30" rows="5" required></textarea>
</div>

    


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
        <button type="submit"  value="Enviar mensaje" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Enviar mensaje</button>
        
        </form>
      </div>
    </div>
  </div>
</div>

<!------modal 2 de notificaciones---------------------->

<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <!-- Contenido del modal -->
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel"><i class="fas fa-bell"></i> Notificaciones</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="max-height: 400px; overflow-y: auto;">
        <!-- Tu formulario PHP aquí -->

       
        <h4 class="mt-4 mb-3">Mensajes recibidos:</h4>

<div id="mensajes_recibidos">
<?php
    // Conexión a la base de datos
    $conexion = mysqli_connect("localhost", "root", "", "cross_army_fitness");

    // ID del usuario actual (supongamos que se obtiene de alguna manera)
    $usuario_id = $_SESSION['id']; // Usamos el ID del usuario logeado

     // Consulta para obtener los mensajes recibidos
     $query_recibidos = "SELECT mensajes.*, usuarios.nombre as emisor_nombre 
     FROM mensajes 
     INNER JOIN usuarios ON mensajes.emisor_id = usuarios.id 
     WHERE receptor_id = $usuario_id";
$result_recibidos = mysqli_query($conexion, $query_recibidos);

// Verificar si hay mensajes recibidos
$hayMensajes = mysqli_num_rows($result_recibidos) > 0;

if ($hayMensajes) {
while ($row = mysqli_fetch_assoc($result_recibidos)) {
    echo "<div class='mb-2'>";
    echo "<i class='fas fa-user-circle' style='color: #1869f7;'></i> De: " . $row['emisor_nombre'] . "<br>";
    echo "<div class='contenedor'><i class='fas fa-envelope-open' style='color: #1869f7;'></i> " . $row['contenido'] . "<br></div>";
    echo "<p class='text-muted' >" . $row['fecha_envio'] . "<br></p>";
    echo "<a href='borrar_mensaje2.php?id=" . $row['id'] . "'style='color:red;'><i class='fas fa-trash-alt'> </i> Eliminar</a><hr>";
    echo "</div>";
  }
} else {
// No hay mensajes recibidos
 echo "<div class='container m-0 row justify-content-center'>";
        echo "<div class='alert alert-secondary col-12 text-center'>No hay mensajes nuevos.</div>";
        echo "</div>"; 
        echo "<div class='container m-0 row justify-content-center'> <i class='fas fa-envelope-open fa-2x'></i></div>";
}

// Cerrar conexión
mysqli_close($conexion);
?>

 </div>
      </div>
         <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
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
        <h3 class="modal-title responsive-text" id="exampleModalLabel"><i class="fas fa-lock"></i> Cambiar Contraseña</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="max-height: 400px; overflow-y: auto;">
        <!-- Tu formulario -->

       
    <div class="card p-4">
        <p class="text-center">Introduce tu correo electrónico  para cambiar <br> tu contraseña.</p>
        <form method="post" action="editar contraseña.php">
            <div class="form-group">
            <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu correo electrónico con nadie.</small>
                <input type="email" name="email" class="form-control" placeholder="Correo electrónico" required>
            </div>
            <div class="form-group">
                <input type="password" name="contraseña_actual" class="form-control" placeholder="Contraseña actual" required>
            </div>
            <div class="form-group">
                <input type="password" name="nueva_contraseña" class="form-control" placeholder="Nueva contraseña" required>
            </div>
            <div class="form-group">
                <input type="password" name="confirmar_contraseña" class="form-control" placeholder="Confirmar nueva contraseña" required>
            </div>
     

            <small id="emailHelp" class="form-text text-muted" style="text-align:center;"> Cross Army Fitness  se   compromete a proteger     la <br>información que procesa haciendo  todo lo posible <br> para  garantizar que esta se utilice 
            solo para  ayudar <br> a que sus atletas tengan una mayor  seguridad  <br>y privacidad de sus datos.</small>
        
            </div>
      </div>
         <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
              <button type="submit" class="btn btn-primary"><i class="fas fa-lock"></i> Cambiar Contraseña</button>
              </form>
    </div>

    
      </div>
    </div>
  </div>
</div>

<!------------------------------------------------------------------------------------------>

<div class="container col-sm-8" style="background-color: rgba(255, 255, 255, 0.9); border-radius:10px;">
       
    
      <div class="container-responsive">
      
    <div class="row">

      
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                    <?php if (!empty($userInformation['imagen'])) : ?>
                        <img src='img/cross.jpg' alt='Imagen de Perfil' width='170' height='150'>
                    <?php else : ?>
                        <img src='img/cross.jpg' alt='Imagen de Perfil' width='170' height='150'>
                    <?php endif; ?>
                        <h5 class="my-3">Cross Army Fitness</h5>
                     <div  class="alert alert-primary">
                        <span class="text-primary"><i class="fas fa-info-circle"></i> ¡Bienvenid@! <i class="fas fa-laugh-beam"></i></span>
                        
                        <div class="d-flex justify-content-center mb-2">
                            <p style="text-align:justify;">Un gusto tenerte en esta gran familia fitness, Esperamos que tu primer dia sea emocionante, saludos!</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="card mb-4 mb-lg-0">
                    <div class="card-body p-0">
                        <ul class="list-group list-group-flush rounded-3">
                            <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                            <a href="#!"><i class="fas fa-envelope" style="color: #186bfb;"></i></a>
                                <p class="mb-0"><?php echo $userInformation['email']; ?></p>
                                <div class="d-flex justify-content-start">
                                    
                    </div>
                    
                    

                      </li>
                            <!-- Agregar más elementos de la lista según tu necesidad -->
                        </ul>
                    </div>
                </div>
            </div>
    
            

    
           
       <!-- nuestro contendido de la tabla -->
       <div class="col-lg-8">
            <div class="card mb-4">
                <div class="card-body">
                    <form action="procesar_edicion.php" method="post">
                        <div class="table">
                            <table class="table table-light">

                            <div class="row">
                            <div class="col-sm-10">
                            <h2 class="mb-0 text-muted responsive-text">Editar información</h2>
                        </div>
                      </div>
                        <hr>
               
               <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Nombre:</p>
                       </div>
                          <div class="col-sm-9">
                            <div class="input-group">
                               <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Escribir tu nombre" value="<?php echo htmlspecialchars($userInformation['nombre']); ?>" onkeyup="validateName(this)">
                               <p id="nameError" style="color: red; display: none;">Solo se permiten letras y espacios.</p>

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
                              <input type="email" class="form-control" name="email" id="email" placeholder="Escribir tu email" value="<?php echo $userInformation['email']?>" disabled >
                              <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-lock"></i></span>
                                </div>
                              </div>
                            </div>
                        </div><hr>
    
                        <div class="row">
                  <div class="col-sm-3">
                     <p class="mb-0">Ciudad:</p>
                       </div>
                            <div class="col-sm-9">
                            <div class="input-group">
                             <input type="text" class="form-control" name="ciudad" id="ciudad" placeholder="Escribir tu ciudad" value="<?php echo $userInformation['ciudad']?>" onkeyup="validateCity(this)" required >
                             <p id="cityError" style="color: red; display: none;">Solo se permiten letras y espacios.</p>
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
                             <input type="number" class="form-control" name="codigo_postal" id="codigo_postal" placeholder="Escribir tu codigo postal" value="<?php echo $userInformation['codigo_postal']?>" required >
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
                                 <option value="+01" <?php echo ($userInformation['pais_codigo'] == '+01') ? 'selected' : '' ?>>+01</option>
                                 <option value="+52" <?php echo ($userInformation['pais_codigo'] == '+52') ? 'selected' : '' ?>>+52</option>
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
                             <input type="tel" class="form-control" name="telefono" id="telefono" placeholder="Escribir tu numero" value="<?php echo $userInformation['telefono']?>" required >
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
                             <input type="number" class="form-control" name="edad" id="edad" placeholder="Edad" value="<?php echo $userInformation['edad']?>" min="18" max="70" required >
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
                               <option value="" <?php echo ($userInformation['sexo'] == '') ? 'selected' : ''; ?>>...</option>
                               <option value="Masculino" <?php echo ($userInformation['sexo'] == 'Masculino') ? 'selected' : ''; ?>>Masculino</option>
                               <option value="Femenino" <?php echo ($userInformation['sexo'] == 'Femenino') ? 'selected' : ''; ?>>Femenino</option>
                               <option value="Indistinto" <?php echo ($userInformation['sexo'] == 'Indistinto') ? 'selected' : ''; ?>>Indistinto</option>
                              </select>
                              <div class="input-group-append">
                                   <span class="input-group-text"> <i class="fas fa-edit"></i></span>
                                </div>
                              </div>
                            </div>
                        </div><hr>


               

            
              </table>
                        <div>
                            <input type="hidden" name="id" value="<?php echo $userInformation['id']?>">
                               <button class="btn btn-primary" type="submit">Actualizar</button>
                    
                            <a  href="perfil  edit.php"><button class="btn btn-success my-2" type="button">Regresar</button></a>
                        
                         </div>

                         <div class="text-center"><a id="abrirModal45" href="#">Cambiar contraseña</a></div>
                      

                      </div>
                 </div>
            </div>
        </div>
    </div>
</div>


              </form>
         </fieldset>
      </div>
 </div>

   
   
      <br>
      <br><br><br>
      
     



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




<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>


<script>
        ///modal para mostar la imagen por el metodo get por medio del id de la imagen 
document.addEventListener('DOMContentLoaded', function() {
    var imagenPerfil = document.getElementById('perfil-imagen');

    imagenPerfil.addEventListener('click', function() {
        var imagenAmpliada = document.createElement('img');
        imagenAmpliada.src = this.src;
        imagenAmpliada.alt = this.alt;
        imagenAmpliada.style.maxWidth = '50%'; ///manipulamos el tamano de la imagen en el contenedor

        var contenedorModal = document.createElement('div');
        contenedorModal.style.position = 'fixed';
        contenedorModal.style.top = '0';
        contenedorModal.style.left = '0';
        contenedorModal.style.width = '100%';
        contenedorModal.style.height = '100%';
        contenedorModal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        contenedorModal.style.display = 'flex';
        contenedorModal.style.justifyContent = 'center';
        contenedorModal.style.alignItems = 'center';

        contenedorModal.appendChild(imagenAmpliada);
        document.body.appendChild(contenedorModal);

        contenedorModal.addEventListener('click', function() {
            contenedorModal.remove();
        });
    });
});

//codigo para ejecutar, abrir modal de envio de mensaje
document.getElementById('abrirModal').addEventListener('click', function() {
    $('#exampleModal').modal('show');
  });

  //codigo para ejecutar, abrir modal de notificaciones
  document.getElementById('abrirModal2').addEventListener('click', function() {
    $('#exampleModal2').modal('show');
  });


  //codigo para ejecutar, abrir modal de cambiar password
  document.getElementById('abrirModal45').addEventListener('click', function() {
    $('#exampleModal45').modal('show');
  });


/////////////script para espaciado entre caracteres que no sea un numero y establece un limite de 10 digitos en type="tel" en su campo telefono////////////////////////////////////////// 

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


///eliminará cualquier caracter ingresado que no sea una letra
///o un espacio en blanco, asegurando que el usuario solo pueda ingresar letras y espacios en el campo de nombre.
function validateName(input) {
    var regex = /^[A-Za-z\s]+$/;
    var name = input.value;
    var error = document.getElementById('nameError');

    if (!regex.test(name)) {
        error.style.display = 'block';
        input.value = name.replace(/[^A-Za-z\s]/g, ''); // Eliminar caracteres no permitidos
    } else {
        error.style.display = 'none';
    }
}

///////////////////////////////////////////////////////////////////////////////////////////

function validateCity(input) {
    var regex = /^[A-Za-z\s]+$/;
    var name = input.value;
    var error = document.getElementById('cityError');

    if (!regex.test(name)) {
        error.style.display = 'block';
        input.value = name.replace(/[^A-Za-z\s]/g, ''); // Eliminar caracteres no permitidos
    } else {
        error.style.display = 'none';
    }
}
</script>


</body>
</html>

<?php
session_start(); // Inicia una sesión para mantener la información del usuario

require_once 'conex_db/conex_db.php'; // Incluye el archivo que contiene la conexión a la base de datos

// Comprueba si se ha enviado una solicitud POST y Obtiene los valores del formulario de inicio de sesión
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    $email = $_POST['email']; 
    $contraseña = $_POST['contraseña'];


     // Prepara una consulta SQL para obtener la información del usuario
    $query = "SELECT id, email, contraseña, estatus, rol FROM usuarios WHERE email = ?";
    $stmt = mysqli_prepare($conn, $query);

    if ($stmt === false) {
        die("Error en la consulta: " . mysqli_error($conn)); // En caso de error en la consulta, muestra un mensaje y termina el script
    }
   
     // Asocia el valor de $email a la consulta preparada
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);// Ejecuta la consulta
    $result = mysqli_stmt_get_result($stmt);// Obtiene el resultado de la consulta
  
      // Si se encuentra un usuario con el correo proporcionado
    if (mysqli_num_rows($result) == 1) {
        $user = mysqli_fetch_assoc($result);// Obtiene la información del usuario

  // Comprueba si la contraseña proporcionada coincide con la almacenada en la base de datos
        if (password_verify($contraseña, $user['contraseña'])) {
 
            if ($user['estatus'] == 'Activo') { // Si el usuario está activo
                $_SESSION['email'] = $user['email'];   // Almacena la información del usuario en la sesión
                $_SESSION['id'] = $user['id'];

                if ($user['rol'] == 'administrador') {// Si el usuario es un administrador
                    header('Location: admin/perfil admin.php');// Redirige al perfil de administrador
                } else {
                    header('Location: atletas/perfil  edit.php');// Redirige al perfil de atleta
                }
                exit;// Termina el script después de la redirección
            } else {
                //$_SESSION['error_message'] = "<div style='color: white; background-color:red; border-radius: 8px; padding: 17px;'>Tu cuenta está inactiva. Por favor, contacta al administrador.</div>";
                header('location: login.php?error2=error_estatus');
                exit();
            }
        } else {
           // $_SESSION['error_message'] = "<div style='color: white; background-color:red; border-radius: 8px; padding: 17px;'>Contraseña incorrecta. Por favor, inténtalo de nuevo.</div>";
           header('location: login.php?error=error_password');
        exit();
        }
    } else {
        //$_SESSION['error_message'] = "<div style='color: white; background-color:red; border-radius: 8px; padding: 17px;'>Correo no registrado. Por favor, verifica tus datos.</div>";
        header('location: login.php?error3=error_email');
        exit();
    }

    mysqli_stmt_close($stmt); // Cierra la consulta preparada

}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"> 
    <!--CDN de font Awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  

    <link rel="stylesheet" href="css/video-login-pc.css">
    <link rel="stylesheet" href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'>
    
   <link rel="icon" href="icon/logos.jpg">

    <title>Cross Army</title>  
    <style>

.modal-dialog {
 margin-top: 220px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
}

  </style>

</head>
<body>

   <!----------------- Modal para mostrar error password -------------------------------------------------------->
   <div class="modal" id="myModalpassword">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Ventana Error </h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-danger text-center"><i class="fas fa-times fa-2x" style="color: #f70202;"></i><br>Contraseña incorrecta. Por favor, inténtalo de nuevo.<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

       </div>
   </div>
</div>


   <!----------------- Modal para mostrar error estatus -------------------------------------------------------->
   <div class="modal" id="myModalestatus">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Ventana Error </h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-danger text-center"><i class="fas fa-times fa-2x" style="color: #f70202;"></i><br>Tu cuenta está inactiva. Por favor, contacta al administrador.<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

       </div>
   </div>
</div>

   <!----------------- Modal para mostrar error email -------------------------------------------------------->
   <div class="modal" id="myModalemail">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Ventana Error </h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-danger text-center"><i class="fas fa-times fa-2x" style="color: #f70202;"></i><br>Correo no registrado. Por favor, verifica tus datos.<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

       </div>
   </div>
</div>

<form action="#" method="POST">
    <div class="box">    
            <video id="bg-video" src="video/video edit.mp4" Loop muted autoplay></video>           
        <div class="container">
                <div class="top">
                    <span>¿QUE ESPERAS PARA SUSCRIBIRTE?</span>
                    <header>INICIAR SESIÓN</header>
                </div>
            <div class="input-field">
                <i class='bx bx-user'></i>
                <input type="email" class="input" placeholder="CORREO ELECTRÓNICO" name="email" id="email"> 
            </div> <br>
            <div class="input-field">
                <i class='bx bx-lock-alt'></i>
                <input type="Password" class="input" placeholder="CONTRASEÑA" name="contraseña" id="contraseña" >
            </div><br>
            <div class="input-field">
                <input type="submit" class="submit" value="INGRESAR" id="ingresar">
            </div><br>
                <div class="two">
                    <label><a href="registrate.php">¿REGÍSTRATE?</a><br>
                      <label><a href="index.html">IR A INICIO</a></label> <br></label><br><br>

                       <?php
        // Mostrar el mensaje de error si existe en la variable de sesión
            if (isset($_SESSION['error_message'])) {
                echo '<p style="color: red; text-align: center; font-weight:bold; ">' . $_SESSION['error_message'] . '</p>';
                unset($_SESSION['error_message']); // Limpiar la variable de sesión
            }
            ?>
                </div>          
        </div>
    </div>
</form> 


<script>
        // Mostrar el modal si el parámetro 'mensaje' es 'borrado_exitoso' el script ejecuta el modal con el mensaje 
window.onload = function() {
  const params = new URLSearchParams(window.location.search);

  if (params.has('error') && params.get('error') === 'error_password') {
    $("#myModalpassword").modal("show");
  }
  
  if (params.has('error2') && params.get('error2') === 'error_estatus') {
    $("#myModalestatus").modal("show");
  } 

  if (params.has('error3') && params.get('error3') === 'error_email') {
    $("#myModalemail").modal("show");
  } 

};
</script>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>  
</html>
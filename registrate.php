<?php
// Verificar si se recibieron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];
    $pais_codigo = $_POST['pais_codigo'];
    $telefono = $_POST['telefono'];

    // Convertir la primera letra de $nombre a mayúscula
    $nombre = ucfirst($_POST['nombre']);

    // Verificar si la contraseña contiene al menos una letra y un número
  if (!preg_match("/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/", $contraseña)) {
    header('location: registrate.php?error=error_password');
    exit();
} else {
        // Cifrar la contraseña antes de guardarla en la base de datos
        $contraseña_cifrada = password_hash($contraseña, PASSWORD_DEFAULT);

        // Obtener la fecha y hora actual
        $fecha_registro = date('Y-m-d H:i:s');

        // Datos de conexión a la base de datos
            $servername = "localhost";
$username = "root";
$password = "";
$dbname = "cross_army_fitness";

        // Intentar conectar a la base de datos
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Verificar la conexión
        if ($conn->connect_error) {
            die("Error en la conexión: " . $conn->connect_error);
        }

        // Verificar si el nombre ya existe
        $sql_verificar_nombre = "SELECT * FROM usuarios WHERE nombre = '$nombre'";
        $result_nombre = $conn->query($sql_verificar_nombre);

        if ($result_nombre->num_rows > 0) {
            header('location: registrate.php?error4=error_nombre');
            exit();
           // $mensajeNombre = "<div style='color: white; background-color:red; border-radius: 8px; text-align:center; padding: 9px;'>¡El nombre ya está en uso!</div>";
        }

        // Verificar si el email ya existe
        $sql_verificar_email = "SELECT * FROM usuarios WHERE email = '$email'";
        $result_email = $conn->query($sql_verificar_email);

        if ($result_email->num_rows > 0) {
            header('location: registrate.php?error3=error_email');
            exit();
            //$mensajeEmail = "<div style='color: white; background-color:red; border-radius: 8px; text-align:center; padding: 9px;'>¡El email ya está en uso!</div>";
        }

        // Verificar si el teléfono ya existe
        $sql_verificar_telefono = "SELECT * FROM usuarios WHERE telefono = '$telefono'";
        $result_telefono = $conn->query($sql_verificar_telefono);

        if ($result_telefono->num_rows > 0) {
            header('location: registrate.php?error2=error_telefono');
            exit();
            //$mensajeTelefono = "<div style='color: white; background-color:red; border-radius: 8px; text-align:center; padding: 9px;'>¡El teléfono ya está en uso!</div>";
        }

        // Si no hay mensajes de error, proceder con la inserción
        if (empty($mensajeNombre) && empty($mensajeEmail) && empty($mensajeTelefono)) {
            $sql = "INSERT INTO usuarios (nombre, email, contraseña, pais_codigo, telefono, fecha_registro) 
                    VALUES ('$nombre', '$email', '$contraseña_cifrada', '$pais_codigo', '$telefono', '$fecha_registro')";

            if ($conn->query($sql) === TRUE) {
                header('location: registrate.php?registro=registro_exitosamente');
                exit();
            } else {
                $mensajeRegistro = "<div style='color: white; background-color:red; border-radius: 8px; text-align:center; padding: 9px;'>Error al registrar: " . $conn->error . "</div>";
            }
        }

        // Cerrar la conexión a la base de datos
        $conn->close();
    }
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
    <link rel="icon" href="icon/icon.ico">
    <link rel="stylesheet" href="css/video-registrar-pc.css">
    <link rel="stylesheet" href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'>
    <title>Cross Army</title>
    <style>

 .modal-dialog {
  margin-top: 220px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
}

   </style>
</head>
<body>

   <!----------------- Modal para mostrar registro exitoso-------------------------------------------------------->
   <div class="modal" id="myModalexitoso">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Registro Exitoso </h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-success text-center"><i class="fas fa-check-circle fa-2x" style="color: #03fc5a;"></i><br>Se registraron tus datos exitosamente<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

       </div>
   </div>
</div>


 <!-------------------Modal para mostrar error en password------------------------------------------------------>
 <div class="modal" id="myModalerror">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Ventana de Error </h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-danger text-center"><i class="fas fa-times fa-2x" style="color: #f70202;"></i><br>La contraseña debe contener al menos una letra y un número.<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

       </div>
   </div>
</div>


 <!-------------------- Modal para mostrar error telefono----------------------------------------------------->
 <div class="modal" id="myModalerror2">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Ventana de Error </h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-danger text-center"><i class="fas fa-times fa-2x" style="color: #f70202;"></i><br>¡El teléfono ya está en uso!<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

       </div>
   </div>
</div>

 <!-----------------------Modal para mostrar error en email-------------------------------------------------->
 <div class="modal" id="myModalerror3">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Ventana de Error</h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-danger text-center"><i class="fas fa-times fa-2x" style="color: #f70202;"></i><br>¡El correo ya está en uso!<br><br></h3>
        
           </div>

           <!-- Pie del modal 
           <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
           </div>-->

       </div>
   </div>
</div>


 <!--------------------Modal para mostrar error en nombre----------------------------------------------------->
 <div class="modal" id="myModalerror4">
   <div class="modal-dialog">
       <div class="modal-content">

           <!-- Cabecera del modal -->
           <div class="modal-header">
             <h4 class="modal-title">Ventana de Error </h4>
               <button type="button" class="close" data-dismiss="modal">&times;</button>
           </div>

           <!-- Cuerpo del modal -->
           <div class="modal-body">
        <h3 class="alert alert-danger text-center"><i class="fas fa-times fa-2x" style="color: #f70202;"></i><br>¡El nombre ya está en uso!<br><br></h3>
        
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
            <video id="bg-video" src="video/registrar edit.mp4" Loop muted autoplay></video>           
        <div class="container">
                <div class="top">
                   
                    <header>REGÍSTRATE</header>
                </div>
        <div class="input-field">
                <i class='bx bx-user'></i>
                <input type="text" class="input" placeholder="NOMBRE COMPLETO" id="nombre" name="nombre"> 
            </div> <br>
        <div class="input-field">
                <i class='bx bx-envelope'></i>
                <input type="email" class="input" placeholder="CORREO ELECTRÓNICO" id="email" name="email"> 
            </div><br>
        <div class="input-field">
            <i class='bx bx-lock-alt'></i>
            <input type="Password" class="input" placeholder="CONTRASEÑA" id="contraseña" name="contraseña">
        </div><br>
       
        <div class="input-field">
        <i class="fas fa-phone-square fa-rotate-90"></i>
                 <select class="input" id="pais_codigo" name="pais_codigo">
                    <option class="text-dark" value="+52">MÉXICO (+52)</option>
                    <option class="text-dark" value="+1">ESTADOS UNIDOS (+1)</option>
                    <!-- Agregamos mas opciones si se necesitan-->
                </select>
            </div><br>

        <div class="input-field">
                <i class='bx bx-phone'></i>
                <input type="tel" class="input" placeholder="NÚMERO TELEFÓNICO" id="telefono" name="telefono" oninput="formatoNumero()" maxlength="10"> 
            </div><br>
            
         <div class="input-field">
                <input type="submit" class="submit" value="REGISTRAR" id="register">
                
            </div>
            
            
                
                <div class="two">
                    <label><a href="login.php">INICIAR SESIÓN / </a></label>
                    <label><a href="index.html">IR A INICIO</a></label> 
                </div>
            
        </div>
    </div>
</form>

<script>
    function formatoNumero() {
        var input = document.getElementById('telefono');
        var numero = input.value.replace(/\D/g, ''); // Eliminar no dígitos
        numero = numero.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Formatear como xxx-xxx-xxxx
        input.value = numero;
    }


    // Mostrar el modal si el parámetro 'mensaje' es 'borrado_exitoso' el script ejecuta el modal con el mensaje 
window.onload = function() {
  const params = new URLSearchParams(window.location.search);

  if (params.has('registro') && params.get('registro') === 'registro_exitosamente') {
    $("#myModalexitoso").modal("show");
  } 

  if (params.has('error') && params.get('error') === 'error_password') {
    $("#myModalerror").modal("show");
  } 

  if (params.has('error2') && params.get('error2') === 'error_telefono') {
    $("#myModalerror2").modal("show");
  } 

  if (params.has('error3') && params.get('error3') === 'error_email') {
    $("#myModalerror3").modal("show");
  } 

  if (params.has('error4') && params.get('error4') === 'error_nombre') {
    $("#myModalerror4").modal("show");
  } 

};
    </script>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>  
  </body>
</html>
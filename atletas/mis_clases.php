<?php


// Verificar si el usuario no ha iniciado sesión y redirigirlo a la página de inicio de sesión
if (!isset($_SESSION['email'])) {
    header('Location: login.php'); // Cambia la ruta de acuerdo a tu estructura de carpetas
    exit;
}

// Conexión a la base de datos (cambia los valores según tu configuración)
$servidor = "localhost";
$usuario = "root";
$contrasena = "";
$basedatos = "cross_army_fitness";

$conexion = new mysqli($servidor, $usuario, $contrasena, $basedatos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

// Recuperar el ID del atleta basado en el correo electrónico
$email = $_SESSION['email'];
$sql = "SELECT id FROM usuarios WHERE email = '$email'";
$result = $conexion->query($sql);

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();
    $id_usuarios = $row['id'];

    // Consulta para obtener las clases agendadas del atleta
    $consulta = "SELECT  ac.Fecha, ac.Hora, ac.Estatus, u.id as id_usuario, u.Nombre as nombre_usuario
             FROM agendar_clases ac
             JOIN usuarios u ON ac.ID_usuarios = u.id
             WHERE ac.ID_usuarios = $id_usuarios";


    $resultado = $conexion->query($consulta);
} else {
    // Manejar caso donde el correo electrónico no corresponde a ningún usuario
    $id_usuarios = null; // Asigna un valor nulo al ID para mostrar un mensaje de error
}

$conexion->close();
?>






<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

    <title>Reserva de Clase de Crossfit</title>

    <link rel="icon" href="../icon/icon.ico">
    
    <!--CDN de font Awesome-->

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">


  


    <style>
      /* Estilo adicional para mejorar la apariencia */
      body {
          background-color: #f8f9fa;
      }
      
     
  

 /* Estilo para la tabla con barra de desplazamiento */
 .table-scroll {
            max-height: 200px; /* Altura máxima de la tabla */
            overflow-y: auto; /* Habilitar desplazamiento vertical */
        }

  </style>
</head>
<body>



<div class="container">
    <div class="row justify-content-center">
        <!-- incluimos el id de sesiones para dar la bienvenida al usuario logeado -->
        <?php // include_once 'ID sesiones.php'; ?>
    </div> 
    
    <?php if ($id_usuarios !== null): ?>
        <?php if ($resultado->num_rows > 0): ?>
            <div class="table-responsive table-scroll">
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php while ($row = $resultado->fetch_assoc()): ?>
                            <tr class="bg-white">
                                <td><?php echo $row['nombre_usuario']; ?></td>
                                <td><?php echo $row['Fecha']; ?></td>
                                <td><?php echo $row['Hora']; ?></td>
                            </tr>
                        <?php endwhile; ?>
                    </tbody>
                </table>
            </div>
        <?php else: ?>
            <p class="text-center">No tienes clases agendadas.</p>
        <?php endif; ?>
    <?php else: ?>
        <p class="text-center text-danger">Error: No se encontró un atleta con el correo electrónico proporcionado.</p>
    <?php endif; ?>

</div>


 










  
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

</body>
</html>
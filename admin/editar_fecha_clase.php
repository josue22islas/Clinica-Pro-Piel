

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
    die("Conexión fallida: " . $conn->connect_error);
}

if(isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT dia_semana, dia_numero, mes, año FROM fechas_consultas WHERE id=$id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $dia_semana = $row["dia_semana"];
        $dia_numero = $row["dia_numero"];
        $mes = $row["mes"];
        $año = $row["año"];
    } else {
        echo "0 resultados";
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $dia_semana = $_POST['dia_semana'];
    $dia_numero = $_POST['dia_numero'];
    $mes = $_POST['mes'];
    $año = $_POST['año'];

    $sql = "UPDATE fechas_consultas SET dia_semana='$dia_semana', dia_numero='$dia_numero', mes='$mes', año='$año' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        header("location: reservaciones admin.php?actualizado=true");// en esta como se trabaja con conn muy efectivo 
        exit(); // Asegúrate de detener la ejecución después de la redirección
    } else {
        echo "Error al actualizar el registro: " . $conn->error;
    }
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

  
  /* Deshabilitar hover en la primera fila del encabezado */
.table thead tr:first-child th {
    pointer-events: none;
    background-color: initial;
}

.modal-dialog {
  margin-top: 260px; /* Ajusta la cantidad de margen para centrar el modal o a gusto del disenador*/
}

.table-responsive-col-sm-10 {
  overflow-x: auto; /* Agrega desplazamiento horizontal si es necesario */
  white-space: nowrap; /* Evita que los elementos se envuelvan en múltiples líneas */
}

.left {
    float: left;
    width: 45%; /* ajusta el ancho según tu diseño */
    margin-right: 5%; /* añade margen entre los elementos izquierdos y derechos */
}

.right {
    float: right;
    width: 45%; /* ajusta el ancho según tu diseño */
    margin-left: 5%; /* añade margen entre los elementos izquierdos y derechos */
}

/* Clearfix para limpiar los flotados */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

.Disponible {  /* las clases css asignadas en la disponibilidad de los resultados de la consulta de la tabla reservas disponibles*/
          background-color: #b6e7c9;
      }
      .No-Disponible { /* las clases css asignadas en la disponibilidad de los resultados de la consulta de la tabla reservas no disponibles*/
          background-color: #fddbd0;
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
    

      <div class="container col-sm-5 " style="background-color: rgba(255, 255, 255, 0.9); border-radius:10px;"><br>
<div class="container col-sm-12">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <form action="" method="post">
                <h1 class="text-center responsive-text" style="-webkit-text-stroke: 2px black; color: transparent; text-shadow: 0px 4px 4px #282828;">Cambiar Fecha</h1><hr>
                <div class="mb-3">
                    <label for="dia_semana" class="form-label">Día de la semana:</label>
                    <select  class="form-control" id="dia_semana" name="dia_semana">
                        <option disabled><?php echo empty($row['dia_semana']) ?>Selecciona dia</option>
                        <option  value="Lunes" <?php if($dia_semana == 'Lunes') echo 'selected'; ?>>Lunes</option>
                        <option value="Martes" <?php if($dia_semana == 'Martes') echo 'selected'; ?>>Martes</option>
                        <option  value="Miércoles" <?php if($dia_semana == 'Miércoles') echo 'selected'; ?>>Miércoles</option>
                        <option value="Jueves" <?php if($dia_semana == 'Jueves') echo 'selected'; ?>>Jueves</option>
                        <option  value="Viernes" <?php if($dia_semana == 'Viernes') echo 'selected'; ?>>Viernes</option>
                        <option value="Sábado" <?php if($dia_semana == 'Sábado') echo 'selected'; ?>>Sábado</option>
                        <!-- Continúa con las opciones para cada día de la semana -->
                    </select>
                </div>
                <div class="mb-3">
                    <label for="dia_numero" class="form-label">Día del mes:</label>
                    <select class="form-control" id="dia_numero" name="dia_numero">
                        <option disabled><?php echo empty($row['dia_numero']) ?>Selecciona...</option>
                        <option value="01" <?php if($dia_numero == '01') echo 'selected'; ?>>01</option>
                        <option value="02" <?php if($dia_numero == '02') echo 'selected'; ?>>02</option>
                        <option value="03" <?php if($dia_numero == '03') echo 'selected'; ?>>03</option>
                        <option value="04" <?php if($dia_numero == '04') echo 'selected'; ?>>04</option>
                        <option value="05" <?php if($dia_numero == '05') echo 'selected'; ?>>05</option>
                        <option value="06" <?php if($dia_numero == '06') echo 'selected'; ?>>06</option>
                        <option value="07" <?php if($dia_numero == '07') echo 'selected'; ?>>07</option>
                        <option value="08" <?php if($dia_numero == '08') echo 'selected'; ?>>08</option>
                        <option value="09" <?php if($dia_numero == '09') echo 'selected'; ?>>09</option>
                        <option value="10" <?php if($dia_numero == '10') echo 'selected'; ?>>10</option>
                        <option value="11" <?php if($dia_numero == '11') echo 'selected'; ?>>11</option>
                        <option value="12" <?php if($dia_numero == '12') echo 'selected'; ?>>12</option>
                        <option value="13" <?php if($dia_numero == '13') echo 'selected'; ?>>13</option>
                        <option value="14" <?php if($dia_numero == '14') echo 'selected'; ?>>14</option>
                        <option value="15" <?php if($dia_numero == '15') echo 'selected'; ?>>15</option>
                        <option value="16" <?php if($dia_numero == '16') echo 'selected'; ?>>16</option>
                        <option value="17" <?php if($dia_numero == '17') echo 'selected'; ?>>17</option>
                        <option value="18" <?php if($dia_numero == '18') echo 'selected'; ?>>18</option>
                        <option value="19" <?php if($dia_numero == '19') echo 'selected'; ?>>19</option>
                        <option value="20" <?php if($dia_numero == '20') echo 'selected'; ?>>20</option>
                        <option value="21" <?php if($dia_numero == '21') echo 'selected'; ?>>21</option>
                        <option value="22" <?php if($dia_numero == '22') echo 'selected'; ?>>22</option>
                        <option value="23" <?php if($dia_numero == '23') echo 'selected'; ?>>23</option>
                        <option value="24" <?php if($dia_numero == '24') echo 'selected'; ?>>24</option>
                        <option value="25" <?php if($dia_numero == '25') echo 'selected'; ?>>25</option>
                        <option value="26" <?php if($dia_numero == '26') echo 'selected'; ?>>26</option>
                        <option value="27" <?php if($dia_numero == '27') echo 'selected'; ?>>27</option>
                        <option value="28" <?php if($dia_numero == '28') echo 'selected'; ?>>28</option>
                        <option value="29" <?php if($dia_numero == '29') echo 'selected'; ?>>29</option>
                        <option value="30" <?php if($dia_numero == '30') echo 'selected'; ?>>30</option>
                        <option value="31" <?php if($dia_numero == '31') echo 'selected'; ?>>31</option>
                        
                        <!-- Continúa con las opciones para cada día del mes -->
                    </select>
                </div>
                <div class="mb-3">
                    <label for="mes" class="form-label">Mes:</label>
                    <select class="form-control" id="mes" name="mes">
                        <option class="text-muted"><?php echo ($row['mes']) ?></option>
                        <option value="Enero" <?php if($mes == 'Enero') echo 'selected'; ?>>Enero</option>
                        <option value="Febrero" <?php if($mes == 'Febrero') echo 'selected'; ?>>Febrero</option>
                        <option value="Marzo" <?php if($mes == 'Marzo') echo 'selected'; ?>>Marzo</option>
                        <option value="Abril" <?php if($mes == 'Abril') echo 'selected'; ?>>Abril</option>
                        <option value="Mayo" <?php if($mes == 'Mayo') echo 'selected'; ?>>Mayo</option>
                        <option value="Junio" <?php if($mes == 'Junio') echo 'selected'; ?>>Junio</option>
                        <option value="Julio" <?php if($mes == 'Julio') echo 'selected'; ?>>Julio</option>
                        <option value="Agosto" <?php if($mes == 'Agosto') echo 'selected'; ?>>Agosto</option>
                        <option value="Septiembre" <?php if($mes == 'Septiembre') echo 'selected'; ?>>Septiembre</option>
                        <option value="Octubre" <?php if($mes == 'Octubre') echo 'selected'; ?>>Octubre</option>
                        <option value="Noviembre" <?php if($mes == 'Noviembre') echo 'selected'; ?>>Noviembre</option>
                        <option value="Diciembre" <?php if($mes == 'Diciembe') echo 'selected'; ?>>Diciembre</option>
                        <!-- Continúa con las opciones para cada mes -->
                    </select>
                </div>
                <div class="mb-3">
                    <label for="año" class="form-label">Año:</label>
                    <select class="form-control" id="año" name="año">
                        <option value="2023" <?php if($año == '2023') echo 'selected'; ?>>2023</option>
                        <option value="2024" <?php if($año == '2024') echo 'selected'; ?>>2024</option>
                        <option value="2025" <?php if($año == '2025') echo 'selected'; ?>>2025</option>
                        <option value="2026" <?php if($año == '2026') echo 'selected'; ?>>2026</option>
                        <option value="2027" <?php if($año == '2027') echo 'selected'; ?>>2027</option>
                        <option value="2028" <?php if($año == '2028') echo 'selected'; ?>>2028</option>
                        <option value="2029" <?php if($año == '2029') echo 'selected'; ?>>2029</option>
                        <option value="2030" <?php if($año == '2030') echo 'selected'; ?>>2030</option>
                        
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Guardar</button>
                <a class="btn btn-danger" href="reservaciones admin.php">Cancelar</a>
            </form>
        </div>
    </div>
</div><br>
</div>


  <!-- Footer-->
  <br><br><br><br>
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
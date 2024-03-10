<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imagen en Grande</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: black;
        }

        img {
            max-width: 100%;
            max-height: 70vh; /* Ajusta la altura máxima según tus preferencias */
        }

      /* Estilos para el enlace */
.icono {
  text-decoration: none; /* Quitar subrayado del enlace */
  display: flex; /* Hacer que los elementos estén en línea */
  align-items: center; /* Centrar verticalmente */
  color: white; /* Color del texto */
}

/* Estilos para el icono */
.icono i {
  margin-right: 5px; /* Espacio entre el icono y el texto */
}

/* Estilos para el texto "cerrar" */
.icono h1 {
  margin: 0; /* Quitar el margen predeterminado del encabezado */
}

    </style>
</head>
<body>
    <?php
    if(isset($_GET['id'])){
        // Obtener el ID de la imagen
        $idImagen = $_GET['id'];
        
        // Consultar la base de datos para obtener la imagen correspondiente
        require_once '../conex_db/conex_db.php';
        $sql = "SELECT imagen FROM galeria WHERE id = $idImagen";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $imagen = base64_encode($row["imagen"]);
            echo '<img src="data:image/jpeg;base64,' . $imagen . '" alt="Imagen en Grande">';
        } else {
            echo 'No se encontró la imagen.';
        }

        $conn->close();
    } else {
        echo 'No se proporcionó un ID de imagen.';
    }
    ?><br><br>

<a href="galeria de usuario.php" class="icono">
  <i class="fas fa-times"></i>
  <h1>Cerrar</h1>
</a>
</body>
</html>

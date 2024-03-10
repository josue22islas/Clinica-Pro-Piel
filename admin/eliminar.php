<?php
// Conexión a la base de datos
$conn = mysqli_connect("localhost", "u990524785_josue_islas", "Erik22isla_", "u990524785_cross_army");

// Verificar si la conexión fue exitosa
if (!$conn) {
  die("Conexión fallida: " . mysqli_connect_error());
}

// Verificar si se recibió el ID del registro a eliminar
if (isset($_POST["id"])) {
  $id = $_POST["id"];
  // Consulta SQL para eliminar el registro correspondiente en la tabla de usuarios
  $sql = "DELETE FROM usuarios WHERE id = '$id'";
  if (mysqli_query($conn, $sql)) {
    // Éxito: devolver un código de estado HTTP 200
    http_response_code(200);
  } else {
    // Error: devolver un código de estado HTTP 500
    http_response_code(500);
  }
} else {
  // Error: devolver un código de estado HTTP 400 (Solicitud incorrecta)
  http_response_code(400);
}

// Cerrar la conexión a la base de datos
mysqli_close($conn);
?>

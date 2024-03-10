<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Establece la conexión a la base de datos
  $servername = "localhost";
$username = "u990524785_josue_islas";
$password = "Erik22isla_";
$dbname = "u990524785_cross_army";
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Error en la conexión: " . $conn->connect_error);
    }

    // Obtén el ID de la reserva y cambia la disponibilidad
    $reserva_id = $_POST['reserva_id'];
    $sql = "SELECT disponibilidad FROM reservas2 WHERE ID=$reserva_id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $nueva_disponibilidad = ($row['disponibilidad'] == 'Disponible') ? 'No-Disponible' : 'Disponible';

        $sql_update = "UPDATE reservas2 SET disponibilidad='$nueva_disponibilidad' WHERE ID=$reserva_id";

        if ($conn->query($sql_update) === TRUE) {
            header('Location: ' . $_SERVER['HTTP_REFERER']); // Redirecciona a la página anterior
            exit();
        } else {
            echo "Error al actualizar la disponibilidad: " . $conn->error;
        }
    } else {
        echo "No se encontró la reserva con ID $reserva_id";
    }

    $conn->close();
}
?>

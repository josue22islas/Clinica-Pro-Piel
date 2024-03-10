<?php
// Datos de conexión a la base de datos
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'cross_army_fitness';

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
   die("Error en la conexión: " . $conn->connect_error);
}

?>
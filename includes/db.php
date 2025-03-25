<?php
$host = 'localhost:3306';
$dbname = 'clinica_citas';
$user = 'root';
$pass = '';

$conn = mysqli_connect($host, $user, $pass, $dbname);

if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
}

mysqli_set_charset($conn, 'utf8mb4');
?>
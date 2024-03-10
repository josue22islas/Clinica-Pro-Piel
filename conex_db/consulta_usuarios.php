<?php
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

            // Consulta para obtener los IDs y nombres de usuarios
            $result = $conexion->query("SELECT id, nombre FROM usuarios WHERE rol = 'usuario'");

            while ($row = $result->fetch_assoc()) {
                echo "<option value='{$row['id']}'>{$row['']}  {$row['nombre']}</option>";
            }

            // Cerrar conexión
            $conexion->close();

           // while ($row = $result->fetch_assoc()) {
             //   echo "<option value='{$row['id']}'>{$row['id']} - {$row['nombre']}</option>"; ///este es un respoaldo del bucle while
           // }
        ?>



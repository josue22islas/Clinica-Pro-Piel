<?php
            // Conexión a la base de datos (cambia los valores según tu configuración)
            $servidor = "localhost";
            $usuario = "u990524785_josue_islas";
            $contrasena = "Erik22isla_";
            $basedatos = "u990524785_cross_army";

            $conexion = new mysqli($servidor, $usuario, $contrasena, $basedatos);

            // Verificar la conexión
            if ($conexion->connect_error) {
                die("Error en la conexión: " . $conexion->connect_error);
            }

            // Consulta para obtener los IDs y nombres de usuarios
            $result = $conexion->query("SELECT id, nombre FROM usuarios");

            while ($row = $result->fetch_assoc()) {
                echo "<option value='{$row['id']}'>{$row['id']} - {$row['nombre']}</option>";
            }

            // Cerrar conexión
            $conexion->close();
        ?>
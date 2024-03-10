<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario de Membresía</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container">
    <h1 class="mt-5">Formulario de Membresía</h1>
    <form action="#" method="post" class="mt-4">
      <div class="mb-3">
        <label for="usuario_id" class="form-label">Selecciona Atleta:</label>
        <select name="usuario_id" id="usuario_id" class="form-select">
          <?php
          // Conexión a la base de datos
          $conexion = mysqli_connect("localhost", "root", "", "cross_army_fitness");

          $query = "SELECT * FROM usuarios WHERE rol = 'usuario'";
          $result = mysqli_query($conexion, $query);

          while ($row = mysqli_fetch_assoc($result)) {
              echo "<option value='" . $row['id'] . "'>" . $row['nombre'] . " (ID: " . $row['id'] . ")</option>";
          }

          // Cerrar conexión
          mysqli_close($conexion);
          ?>
        </select>
      </div>

      <div class="mb-3">
        <label for="tipo_membresia" class="form-label">Tipo de Membresía:</label>
        <select id="tipo_membresia" name="tipo_membresia" class="form-select" required>
          <option value="visita">Visita</option>
          <option value="semanal">Semanal</option>
          <option value="mensual">Mensual</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="precio" class="form-label">Precio:</label>
        <select id="precio" name="precio" class="form-select" required>
          <?php
          // Conexión a la base de datos
          $conexion = mysqli_connect("localhost", "u990524785_josue_islas", "Erik22isla_", "u990524785_cross_army");

          $query = "SHOW COLUMNS FROM membresias LIKE 'precio'";
          $result = mysqli_query($conexion, $query);

          $row = mysqli_fetch_assoc($result);
          $enum_str = $row['Type'];
          preg_match_all("/'([^']+)'/", $enum_str, $matches);

          foreach ($matches[1] as $valor) {
              echo "<option value='$valor'>$valor</option>";
          }

          // Cerrar conexión
          mysqli_close($conexion);
          ?>
        </select>
        <button class="btn btn-link"><a href="cambiar_precio.php">Cambiar precio</a></button>
      </div>

      <div class="mb-3">
        <label for="fecha_inicio" class="form-label">Fecha de Inicio:</label>
        <input type="date" id="fecha_inicio" name="fecha_inicio" class="form-control" min="<?php echo date('Y-m-d', strtotime('-1 day')); ?>" required>
      </div>

      <div class="mb-3">
        <label for="fecha_termino" class="form-label">Fecha de Término:</label>
        <input type="date" id="fecha_termino" name="fecha_termino" class="form-control" min="<?php echo date('Y-m-d', strtotime('-1 day')); ?>" required>
      </div>

      <input type="submit" value="Enviar" class="btn btn-primary">
    </form>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

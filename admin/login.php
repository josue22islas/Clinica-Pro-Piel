<?php
session_start();
require_once '../includes/db.php'; // Si usas la conexión a BD

// Procesar el formulario solo si se envió
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validar campos
    if (empty($_POST['usuario']) || empty($_POST['password'])) {
        $error = "⚠️ Usuario y contraseña son obligatorios.";
    } else {
        // Simulación de credenciales (para pruebas)
        $usuario_valido = 'admin';
        $password_valido = 'admin123';

        if ($_POST['usuario'] === $usuario_valido && $_POST['password'] === $password_valido) {
            $_SESSION['admin'] = true;
            header('Location: dashboard.php');
            exit;
        } else {
            $error = "❌ Credenciales incorrectas.";
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Iniciar Sesión</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 400px; margin: 50px auto; padding: 20px; }
        .error { color: red; margin-bottom: 15px; }
        input { width: 100%; padding: 8px; margin: 5px 0; }
    </style>
</head>
<body>
    <h2>🔑 Iniciar Sesión (Admin)</h2>
    
    <?php if (isset($error)): ?>
        <div class="error"><?= $error ?></div>
    <?php endif; ?>

    <form method="POST">
        <label>Usuario:</label>
        <input type="text" name="usuario" required><br>

        <label>Contraseña:</label>
        <input type="password" name="password" required><br>

        <button type="submit">Ingresar</button>
    </form>
</body>
</html>
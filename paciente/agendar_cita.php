<?php
session_start();
require_once '../includes/db.php';

$precio_base = 800.00;
$anticipo = $precio_base * 0.5;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_SESSION['paciente'] = [
        'nombre' => $_POST['nombre'],
        'telefono' => $_POST['telefono'],
        'email' => $_POST['email'],
        'especialidad' => $_POST['especialidad'],
        'fecha' => $_POST['fecha'],
        'hora' => $_POST['hora']
    ];

    header('Location: confirmar_cita.php');
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Agendar Cita</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .form-container {
            max-width: 800px;
            margin: 2rem auto;
            padding: 2rem;
            background: white;
            border-radius: 15px;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        }
        .time-alert {
            display: none;
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <!-- Tu barra de navegación aquí -->
    
    <div class="form-container">
        <h2 class="mb-4">📅 Agendar Nueva Cita</h2>
        
        <div id="time-alert" class="alert alert-danger time-alert">
            ⚠️ Este horario no está disponible. Por favor selecciona otro.
        </div>

        <form method="POST" id="citaForm">
            <!-- Campos del formulario (mantén tus campos actuales) -->
            
            <div class="mb-3">
                <label class="form-label">Fecha</label>
                <input type="date" name="fecha" class="form-control" 
                       min="<?= date('Y-m-d') ?>" required 
                       id="fechaInput">
            </div>

            <div class="mb-3">
                <label class="form-label">Hora</label>
                <input type="time" name="hora" class="form-control" 
                       min="09:00" max="18:00" required 
                       id="horaInput">
            </div>

            <!-- Resto de tu formulario -->
            
            <button type="submit" class="btn btn-primary w-100 mt-3 py-2">
                Continuar
            </button>
        </form>
    </div>

    <script>
        // Validación en tiempo real
        document.getElementById('fechaInput').addEventListener('change', checkAvailability);
        document.getElementById('horaInput').addEventListener('change', checkAvailability);

        async function checkAvailability() {
            const fecha = document.getElementById('fechaInput').value;
            const hora = document.getElementById('horaInput').value;
            const especialidad = document.querySelector('[name="especialidad"]').value;
            
            if(fecha && hora && especialidad) {
                const response = await fetch(`check_disponibilidad.php?fecha=${fecha}&hora=${hora}&especialidad=${especialidad}`);
                const data = await response.json();
                
                const alert = document.getElementById('time-alert');
                if(!data.disponible) {
                    alert.style.display = 'block';
                    document.getElementById('horaInput').value = '';
                } else {
                    alert.style.display = 'none';
                }
            }
        }
    </script>
</body>
</html>
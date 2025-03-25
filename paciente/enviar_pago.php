<?php
session_start();
require_once '../includes/db.php';

// Validar ID de cita
$id_cita = $_POST['id_cita'] ?? die("
    <div style='padding:20px; background:#ffebee; color:#b71c1c;'>
        ❌ Error: No se proporcionó ID de cita.
    </div>
");

// Verificar existencia de la cita
$sql = "SELECT c.id, p.nombre_completo 
        FROM citas c
        JOIN pacientes p ON c.id_paciente = p.id
        WHERE c.id_unico = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "s", $id_cita);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

if (mysqli_num_rows($result) === 0) {
    die("
        <div style='padding:20px; background:#fff3e0; color:#ef6c00;'>
            ⚠️ Error: La cita $id_cita no existe en el sistema.
        </div>
    ");
}

// Procesar archivo
$uploadDir = '../uploads/';
$allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
$maxSize = 5 * 1024 * 1024; // 5MB

$file = $_FILES['comprobante'];

// Validar tipo y tamaño
if (!in_array($file['type'], $allowedTypes)) {
    die("
        <div style='padding:20px; background:#ffebee; color:#b71c1c;'>
            ❌ Error: Solo se permiten archivos JPG, PNG o PDF.
        </div>
    ");
}

if ($file['size'] > $maxSize) {
    die("
        <div style='padding:20px; background:#ffebee; color:#b71c1c;'>
            ❌ Error: El archivo excede los 5MB permitidos.
        </div>
    ");
}

// Generar nombre único y subir
$fileName = "COMP-" . $id_cita . "-" . uniqid() . "." . pathinfo($file['name'], PATHINFO_EXTENSION);
$filePath = $uploadDir . $fileName;

if (move_uploaded_file($file['tmp_name'], $filePath)) {
    // Guardar en base de datos
    $sql_pago = "INSERT INTO pagos (id_cita, comprobante_path) 
                VALUES ((SELECT id FROM citas WHERE id_unico = ?), ?)";
    $stmt_pago = mysqli_prepare($conn, $sql_pago);
    mysqli_stmt_bind_param($stmt_pago, "ss", $id_cita, $filePath);
    
    if (mysqli_stmt_execute($stmt_pago)) {
        echo "
            <div style='padding:20px; background:#e8f5e9; color:#2e7d32;'>
                ✅ Comprobante subido correctamente.<br>
                ID de Cita: $id_cita<br>
                Estado: Pendiente de confirmación.
            </div>
        ";
    } else {
        die("
            <div style='padding:20px; background:#ffebee; color:#b71c1c;'>
                ❌ Error al guardar en la base de datos: " . mysqli_error($conn) . "
            </div>
        ");
    }
} else {
    die("
        <div style='padding:20px; background:#ffebee; color:#b71c1c;'>
            ❌ Error al subir el archivo. Verifica los permisos de la carpeta 'uploads'.
        </div>
    ");
}
?>
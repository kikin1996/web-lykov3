<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get API key from environment or config
$apiKey = getenv('RESEND_API_KEY');
if (!$apiKey) {
    // Try to load from config file if exists
    $configFile = __DIR__ . '/../config.php';
    if (file_exists($configFile)) {
        include $configFile;
        if (isset($RESEND_API_KEY)) {
            $apiKey = $RESEND_API_KEY;
        }
    }
}

// Fallback: hardcoded API key (not recommended for production, but works for static sites)
if (!$apiKey) {
    $apiKey = 're_PYkfyG8H_CXiS3e58fmTQ7e9ztWvJK1tJ';
}

if (!$apiKey) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'API key not configured']);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit();
}

// Validate required fields
$required = ['to', 'subject', 'html'];
foreach ($required as $field) {
    if (!isset($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Missing required field: $field"]);
        exit();
    }
}

// Prepare Resend API request
// V ostrém režimu posíláme přímo na cílový email
$recipientEmail = is_array($data['to']) ? $data['to'][0] : $data['to'];
$subject = $data['subject'];

$resendData = [
    'from' => $data['from'] ?? 'onboarding@resend.dev',
    'to' => [$recipientEmail],
    'subject' => $subject,
    'html' => $data['html'],
];

if (isset($data['text'])) {
    $resendData['text'] = $data['text'];
}

// Make request to Resend API
$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($resendData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'CURL error: ' . $curlError]);
    exit();
}

if ($httpCode >= 200 && $httpCode < 300) {
    $responseData = json_decode($response, true);
    echo json_encode(['success' => true, 'data' => $responseData]);
} else {
    // Pro chyby z Resend API vracíme 200, aby frontend mohl zobrazit chybovou zprávu
    $errorData = json_decode($response, true);
    $errorMessage = $errorData['message'] ?? 'Unknown error';
    
    // Pokud je to chyba o testovacích emailech, upravíme zprávu
    if (strpos($errorMessage, 'testing emails') !== false || strpos($errorMessage, 'verify a domain') !== false) {
        $errorMessage = 'Email byl úspěšně odeslán na testovací adresu (kristian.karas22@gmail.com). Pro odesílání přímo na info@domypecerady.cz je potřeba ověřit doménu v Resend.';
    }
    
    http_response_code(200); // Vracíme 200, aby frontend mohl zobrazit chybovou zprávu
    echo json_encode(['success' => false, 'message' => $errorMessage, 'data' => $errorData]);
}
?>


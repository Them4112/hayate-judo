<?php
require_once __DIR__ . "/functions/generateNewAccessToken.php";
$originList = ["http://localhost", ""];
$origin = $_SERVER['HTTP_HOST'] ?? '';
Header("Access-Control-Allow-Methods: GET,POST");
Header("Access-Control-Allow-Headers: Authorization, Content-Type");
if (in_array($origin, $originList, true)) {
    Header("Access-Control-Allow-Origin: $origin");
    Header("Access-Control-Allow-Credentials: true");
}

try {
    generateNewAccessToken();
} catch (Exception $e) {
    if (http_response_code() === 200) {
        http_response_code(500);
    }
    error_log("Błąd wewnętrzny serwera:" . $e->getMessage());
    echo json_encode(["message" => "Błąd wewnętrzny serwera"]);
}

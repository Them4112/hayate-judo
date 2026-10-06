<?php
require_once __DIR__ . "/generateRefreshTokenLogs.php";
function generateNewAccessToken()
{
    $accessToken = $_SERVER["ACCESS_TOKEN"];
    if (!$accessToken) {
        http_response_code(500);
        throw new Exception("Access token nieaktualny");
    }
    $query = curl_init("https://graph.instagram.com/refresh_access_token"
        . "?grant_type=ig_refresh_token"
        . "&access_token=" . urlencode($accessToken));

    curl_setopt($query, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($query);
    $json = json_decode($response, true);
    $accessToken = $json["access_token"];
    $htaccessPath = __DIR__ . "/../.htaccess";

    $content = file_get_contents($htaccessPath);

    $content = preg_replace(
        '/SetEnv ACCESS_TOKEN .*/',
        'SetEnv ACCESS_TOKEN ' . $accessToken,
        $content
    );

    file_put_contents($htaccessPath, $content);
    generateRefreshTokenLogs($json["expires_in"]);

    http_response_code(200);
    return;
}
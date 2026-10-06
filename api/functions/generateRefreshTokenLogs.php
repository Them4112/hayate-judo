<?php
require_once __DIR__ . "/connectToDatabase.php";
function generateRefreshTokenLogs($seconds)
{
    $dateTime = new DateTime();
    $dateTime = $dateTime->format("Y-m-d H:i:s");
    $conn = connectToDatabase();
    $query = $conn->prepare("INSERT INTO refreshTokenLogs(addedDate,caption,expirationDate) values (:addedDate,:caption,:expirationDate)");
    $expirationDate = new DateTime();
    $expirationDate = $expirationDate->modify("+ $seconds seconds");

    $query->execute(
        [
            ":addedDate" => $dateTime,
            ":caption" => "Wygenerowano nowy token",
            ":expirationDate" => $expirationDate->format("Y-m-d H:i:s")
        ]
    );
    return true;
}
<?php
require_once __DIR__ . "/connectToDatabase.php";
function checkIfRefreshTokenShouldBeRefreshed()
{
    $conn = connectToDatabase();
    $query = $conn->prepare("SELECT * from refreshTokenLogs order by addedDate desc limit 1");
    $query->execute([]);
    echo "XD";
    $row = $query->fetch(PDO::FETCH_ASSOC);
    if (!$row) {
        return true;
    }

    $expiryDateTime = new DateTime($row["expirationDate"]);
    $currentTime = new DateTime();
    $difference = $expiryDateTime->getTimestamp() - $currentTime->getTimestamp();
    echo $difference;
    if ($difference < (60 * 60 * 24 * 7)) {
        return true;
    }
    return false;
}
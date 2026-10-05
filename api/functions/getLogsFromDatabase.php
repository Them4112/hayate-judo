<?php
require_once __DIR__ . "/connectToDatabase.php";
function getLogsFromDatabase()
{
    $conn = connectToDatabase();
    date_default_timezone_set("Europe/Warsaw");
    $currentMinutes = intval(date("i"));
    $dateTime = new DateTime();
    echo "<br>";
    $dateTime = $dateTime->modify("- $currentMinutes minutes");

    $dateTime2 = new DateTime();
    $currentMinutes = 60 - $currentMinutes;
    $dateTime2 = $dateTime2->modify("+ $currentMinutes minutes");
    echo $dateTime->format("Y-m-d H:i:s");
    echo $dateTime2->format("Y-m-d H:i:s");

    $query = $conn->prepare("SELECT * from postAdditionLogs where timestamp >= :timestamp1 and timestamp <= :timestamp2");
    $query->execute([
        ":timestamp1" => $dateTime->format("Y-m-d H:i:s"),
        ":timestamp2" => $dateTime2->format("Y-m-d H:i:s")
    ]);

    $row = $query->fetch(PDO::FETCH_ASSOC);
    return $row;
}
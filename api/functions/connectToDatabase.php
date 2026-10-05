<?php
function connectToDatabase()
{
    $name = $_SERVER["DB_NAME"];
    $host = $_SERVER["DB_HOST"];
    $user = $_SERVER["DB_USER"];
    $pass = $_SERVER["DB_PASS"];
    $connection = new PDO("mysql: host=$host;dbname=$name", $user, $pass);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $connection;
}
?>
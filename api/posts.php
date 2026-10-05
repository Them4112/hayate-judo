<?php
require_once __DIR__ . "/classes/post.php";
require_once __DIR__ . "/functions/connectToDatabase.php";
require_once __DIR__ . "/functions/getPostsFromAPI.php";
require_once __DIR__ . "/functions/addPostsToDatabase.php";
require_once __DIR__ . "/functions/getLogsFromDatabase.php";
try {
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $ifFetchedFromAPI = getLogsFromDatabase();
        if (!$ifFetchedFromAPI) {
            echo "Fetchuje z API";
            getPostsFromAPI(5);
        } else {
            echo "Fetchuje z bazy danych";
            $posts = getPostsFromDatabase(5);
            echo json_encode($posts);
        }
    }
} catch (PDOException $e) {
    error_log("Bład bazy danych:" . $e->getMessage());
    http_response_code(500);
    echo json_encode(["message" => "Błąd wewnętrzny serwera"]);
    return;
} catch (Exception $e) {
    if (http_response_code() < 500) {
        echo json_encode(["message" => $e->getMessage()]);
    } else {
        error_log("Błąd wewnętrzny serwera:" . $e->getMessage());
        http_response_code(500);
        echo json_encode(["message" => "Błąd wewnętrzny serwera"]);
    }
    return;
}



?>
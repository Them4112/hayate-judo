<?php
require_once __DIR__ . "/getPostsFromDatabase.php";
function addPostsToDatabase($postList)
{
    $conn = connectToDatabase();
    date_default_timezone_set("Europe/Warsaw");
    $currentMinutes = intval(date("i"));
    $dateTime = new DateTime();

    $dateTime->modify("- $currentMinutes minutes");

    $dateTime2 = new DateTime();
    $currentMinutes = 60 - $currentMinutes;
    $dateTime2->modify("+ $currentMinutes minutes");

    echo $dateTime->format("Y-m-d H:i:s");
    echo $dateTime2->format("Y-m-d H:i:s");
    $query = $conn->prepare("SELECT * from postAdditionLogs where timestamp >= :timestamp1 and timestamp <= :timestamp2");
    $query->execute([
        ":timestamp1" => $dateTime->format("Y-m-d H:i:s"),
        ":timestamp2" => $dateTime2->format("Y-m-d H:i:s")
    ]);

    $row = $query->fetch(PDO::FETCH_ASSOC);
    if (!$row) {
        $postsFromDatabase = getPostsFromDatabase(0);
        $ifAnyPostsAdded = false;
        foreach ($postList as $post) {
            if (($postsFromDatabase == null) || ($postsFromDatabase != null && !checkIfIDExists($post, $postsFromDatabase))) {
                echo "XD";
                echo "<br>";
                echo $postsFromDatabase[0]->id;
                $query1 = $conn->prepare("INSERT INTO post (id,caption,permaLink,mediaURL,mediaType,timestamp) VALUES (:id,:caption,:permaLink,:mediaURL,:mediaType,:timestamp)");
                $query1->execute([
                    ":id" => $post->id,
                    ":caption" => $post->caption,
                    ":permaLink" => $post->permaLink,
                    ":mediaURL" => $post->mediaUrl,
                    ":mediaType" => $post->mediaType,
                    ":timestamp" => $post->timestamp
                ]);
                $ifAnyPostsAdded = true;
            }
        }
        $query2 = $conn->prepare("INSERT INTO postAdditionLogs (timestamp,caption) VALUES (:timestamp1,:caption)");
        $query2->execute([
            ":timestamp1" => $dateTime2->format("Y-m-d H:i:s"),
            ":caption" => $ifAnyPostsAdded ? "Dodano post na godzinę" : "Brak nowych postów"
        ]);
    } else {
        return;
    }
}
function checkIfIDExists($post, $postListFromDatabase)
{
    for ($i = 0; $i < count($postListFromDatabase); $i++) {
        if ($post->id === $postListFromDatabase[$i]->id)
            return true;
    }
    return false;
}
<?php
require_once __DIR__ . "/connectToDatabase.php";
function getPostsFromDatabase($limit)
{
    $db = connectToDatabase();
    $query = "";
    if ($limit != 0) {
        $query = $db->prepare("SELECT * from post LIMIT 5");
        $query->execute([

        ]);
    } else {
        $query = $db->prepare("SELECT * from post");
        $query->execute([]);
    }

    $postList = [];
    while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
        $postList[] = new Post($row["id"], $row["caption"], $row["permaLink"], $row["mediaURL"], "Hayate Judo", $row["mediaType"], $row["timestamp"]);
    }
    if (count($postList) > 0) {
        return $postList;
    } else {
        return null;
    }
}
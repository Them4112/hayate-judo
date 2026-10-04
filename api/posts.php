<?php
require_once __DIR__ . "/classes/post.php";

try {
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        getPostsFromAPI(9);
    }
} catch (Exception $e) {
    error_log($e);
}

function getPostsFromAPI($limit)
{
    $id = getenv("ACCOUNT_ID");
    $accessToken = getenv("ACCESS_TOKEN");
    if (!$id || !$accessToken) {
        throw new Exception("Credentials not loaded");
    }
    $query = curl_init("https://graph.instagram.com/v26.0/$id/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=$accessToken&limit=$limit");
    curl_setopt($query, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($query);
    if (!$response) {
        http_response_code(500);
        throw new Exception("Request error");
    }
    $postList = json_decode($response, true);
    $limitedPostList = [];
    foreach ($postList["data"] as $post) {
        $limitedPostList[] = new Post($post["caption"], $post["permalink"], $post["media_url"], "Hayate Judo", $post["media_type"], $post["timestamp"]);
    }
    if (count($limitedPostList) > 0) {
        echo json_encode($limitedPostList);
    }
    return;
}
function getPostsFromDatabase($limit)
{

}
?>
<?php
// for Postman http://localhost/BookReviews/api/read.php?start=1&rpp=7

// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../config/Database.php';
include_once '../model/Review.php';

if (isset($_REQUEST["rpp"]) && isset($_REQUEST["start"])) {
    $rpp = $_REQUEST["rpp"];
    $start = $_REQUEST["start"] - 1;
}

// Instantiate DB $ connect
$database = new Database();
$db = $database->connect();

// Instantiate review object
$review = new Review($db);

$review->setRpp($rpp);
$review->setStart($start);

// Review query
$result = $review->read();

// Get row count
$num = $result->rowCount();

// Check if any review
if ($num > 0) {
    // Review array
    $reviews_arr = [];
    $reviews_arr['data'] = [];
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $created_at = date(" H:i:s d.m.Y", strtotime($created_at));
        $reviews_item = array(
            'id' => $id,
            'name' => html_entity_decode($name),
            'evaluation' => $evaluation,
            'body' => html_entity_decode($body),
            'image' => $image,
            'created_at' => $created_at,
            'count_of_row' => $num
        );

        // Push to the data
        array_push($reviews_arr['data'], $reviews_item);
    }
// Turn to JSON & output
    echo json_encode($reviews_arr['data']);
} else {
// No Posts
    echo json_encode(
        array('message' => 'No Posts Found')
    );
}

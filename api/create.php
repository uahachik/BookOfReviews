<?php
// for Postman http://localhost/BookReviews/api/create.php
//             Headers  Key: Content-Type  Value: application/json
//             Body  raw
//             {
//	               "name": "Beyonce",
//	               "evaluation": "b",
//	               "body": "I'm appreciated.",
//	               "image": ""
//              }


// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');  // "X-Requested-With" will help with cross-site scripting attacks

include_once '../config/Database.php';
include_once '../model/Review.php';


// Instantiate DB $ connect
$database = new Database();

$db = $database->connect();

// Instantiate review object
$review = new Review($db);

// Get raw posted data (data should meet us whatever is submitted)
// file_get_contents("php://input") = $HTTP_RAW_POST_DATA (to get the body of JSON request)
$data = json_decode(file_get_contents("php://input"));

// Assigning what we have in the data to the reviews
// reviews-model or reviews-object
$review->name = $data->name;
$review->evaluation = $data->evaluation;
$review->body = $data->body;
$review->image = $data->image;

if ($review->name != '' && $review->evaluation != '' && $review->body != '') {
    // Create posts
    if ($review->create()) {
        echo json_encode(
            array('message' => 'Post Created')
        );
    } else {
        echo json_encode(
            array('message' => 'Post Not Created')
        );
    }
}


<?php

// for Postman http://localhost/BookReviews/api/stat.php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../config/Database.php';
include_once '../model/Review.php';

// Instantiate DB $ connect
$database = new Database();
$db = $database->connect();

// Instantiate review object
$review = new Review($db);
$review_a = new Review($db);
$review_b = new Review($db);
$review_c = new Review($db);
$review_d = new Review($db);

// query
$result = $review->nor();
$result_a = $review_a->noa();
$result_b = $review_b->nob();
$result_c = $review_c->noc();
$result_d = $review_d->nod();

// Get row count
$num = $result->rowCount();

// Check if any review
if ($num > 0) {
    // Data Arrays
    $reviews_arr['data'] = [];

    $nor = $result->fetch(PDO::FETCH_ASSOC);
    extract($nor);

    $noa = $result_a->fetch(PDO::FETCH_ASSOC);
    extract($noa);


    $nob = $result_b->fetch(PDO::FETCH_ASSOC);
    extract($nob);


    $noc = $result_c->fetch(PDO::FETCH_ASSOC);
    extract($noc);


    $nod = $result_d->fetch(PDO::FETCH_ASSOC);
    extract($nod);

    $reviews_item = array(
        'nor' => $nor,
        'noa' => $noa,
        'nob' => $nob,
        'noc' => $noc,
        'nod' => $nod
    );

    // Push to the data
    array_push($reviews_arr['data'], $reviews_item);

// Turn to JSON & output
    echo json_encode($reviews_arr['data']);
} else {
// No Posts
    echo json_encode(
        array('message' => 'No Posts Found')
    );
}


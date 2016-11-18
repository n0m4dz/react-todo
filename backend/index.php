<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$todos = [
    [
        'id' => 1,
        'job' => 'Get up',
        'completed' => true
    ],
    [
        'id' => 2,
        'job' => 'Go to work',
        'completed' => true
    ],
    [
        'id' => 3,
        'job' => 'Have lunch',
        'completed' => false
    ],
    [
        'id' => 4,
        'job' => 'Go back to home',
        'completed' => false
    ]
];

echo json_encode($todos);

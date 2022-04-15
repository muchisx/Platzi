<?php
function placesRecommendation($condition = '', $question = '') {
    $weather = array("Bogota" => "cold", "Monteria" => "holt", "Medellin" => "mild");
    $location = array("Guajira" => "north", "Leticia" => "south", "Santander" => "east", "Antioquia" => "west");
    $tourism = array("Santa Marta" => "sea", "Villavicencio" => "plains", "Riohacha" => "desert", "Quindio" => "valley");

    switch($condition) {
        case "weather":
            $search = $weather;
        break;
        case "location":
            $search = $location;
        break;
        case "tourism":
            $search = $tourism;
        break;
        default:
            echo "Welcome to Colombia!";
    }
    echo "The perfect place for you is ".array_search($question, $search);
    echo $question;
}

placesRecommendation("weather", "cold");


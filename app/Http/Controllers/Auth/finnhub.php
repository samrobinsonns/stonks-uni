<?php
function getStockData($symbol) {
    $api_key = 'cghh88hr01qjd0395atgcghh88hr01qjd0395au0';
    $url = "https://finnhub.io/api/v1/quote?symbol=$symbol&token=$api_key";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

    $response = curl_exec($ch);
    curl_close($ch);

    return $response;
}

header('Content-Type: application/json');
$symbol = $_GET['symbol'];
echo getStockData($symbol);
?>

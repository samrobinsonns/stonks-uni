<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$api_key = 'cghh88hr01qjd0395atgcghh88hr01qjd0395au0';

if (isset($_GET['symbol'])) {
    $symbol = $_GET['symbol'];
    $finnhub_url = "https://finnhub.io/api/v1/quote?symbol={$symbol}&token={$api_key}";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $finnhub_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($ch);
    curl_close($ch);

    echo $result;
} else {
    echo json_encode(['error' => 'No symbol provided']);
}

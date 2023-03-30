<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StocksController extends Controller
{
    private $finnhub_api_key = 'cghh88hr01qjd0395atgcghh88hr01qjd0395au0';

    public function getStockPrice(Request $request, $symbol)
    {$finnhub_url = "https://finnhub.io/api/v1/quote?symbol=%7B$symbol%7D&token=%7B$this-%3Efinnhub_api_key%7D";


        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $finnhub_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        curl_close($ch);

        return response()->json($result);
    }
}

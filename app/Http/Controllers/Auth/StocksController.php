<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class StocksController extends Controller
{
    private $finnhub_api_key = 'cgishbpr01qoenkm07s0cgishbpr01qoenkm07sg';

    public function getStockPrice(Request $request, $symbol)
    {
        $finnhub_url = "https://finnhub.io/api/v1/quote?symbol={$symbol}&token={$this->finnhub_api_key}";
        dd($symbol);
        $response = Http::get($finnhub_url);

        if ($response->status() == 200) {
            $result = $response->json();
            return response()->json(['price' => $result['c']]);
        } else {
            return response()->json(['error' => 'Error retrieving stock price']);
        }
    }
}

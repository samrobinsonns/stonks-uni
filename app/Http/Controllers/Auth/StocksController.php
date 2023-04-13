<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\Controller;

class StocksController extends Controller
{
    private string $finnhub_api_key;

    public function __construct()
    {
        $this->finnhub_api_key = config("services.finnhub.key");
    }

    public function getStockPrice(Request $request, $symbol)
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

        $finnhub_url = "https://finnhub.io/api/v1/quote?symbol={$symbol}&token={$this->finnhub_api_key}";
        $response = Http::get($finnhub_url);

        if ($response->status() == 200) {
            $result = $response->json();
            return response()->json(['price' => $result['c']]);
        } else {
            return response()->json(['error' => 'Error retrieving stock price']);
        }
    }
}

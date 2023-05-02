<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\StocksController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\AvatarController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes();

Route::get('/test', function () {
    dd(\Illuminate\Support\Facades\Storage::url('avatars/RZU3GgSitWYDB0G292IXh4SPKqBVEXF5546jilxA.jpg'));
});

Route::get('/logout', function () {
    Auth::logout(); // Logout the user
    return redirect()->route('login'); // Redirect to the login page
})->name('logout');

Route::post('/avatar', [AvatarController::class, 'updateAvatar']);

Route::get('/profile', [UserController::class, 'profile'])
    ->middleware('auth')
    ->name('profile');

Route::post('/profile', [UserController::class, 'update'])
    ->middleware('auth')
    ->name('profile.update');

Route::get('/stocks/{symbol}', [StocksController::class, 'getStockPrice']);

Route::middleware(['auth'])->group(function () {
    Route::post('/change-password', [AccountController::class, 'changePassword']);
    Route::post('/change-email', [AccountController::class, 'changeEmail']);
});

Route::post('/avatar/upload', [AvatarController::class, 'uploadAvatar'])->middleware('auth:sanctum');


Route::get('/{catch?}', function () {
    return view('home'); // your start view
})->where('catch', '^(?!api).*$');



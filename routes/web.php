<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/logout', function () {
    Auth::logout(); // Logout the user
    return redirect()->route('login'); // Redirect to the login page
})->name('logout');

Route::get('/{catch?}', function () {
    return view('home'); // your start view
})->where('catch', '^(?!api).*$');

Route::post('/avatar', 'App\Http\Controllers\AvatarController@updateAvatar');

use App\Http\Controllers\UserController;

Route::get('/api/user', [App\Http\Controllers\UserController::class, 'getUserData']);

Route::get('/profile', [App\Http\Controllers\UserController::class, 'profile'])
    ->middleware('auth')
    ->name('profile');

Route::post('/profile', [App\Http\Controllers\UserController::class, 'update'])
    ->middleware('auth')
    ->name('profile.update');





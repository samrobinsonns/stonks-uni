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
Route::post('/avatar', function (Request $request) {
    $user = $request->user();

    if ($request->hasFile('avatar')) {
        $file = $request->file('avatar');
        $filename = $file->getClientOriginalName();

        // Save the file to storage/app/public/avatars directory
        $path = $file->storeAs('public/avatars', $filename);

        // Update the user's avatar field in the database
        $user->avatar = $filename;
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Avatar uploaded successfully',
            'filename' => $filename,
        ]);
    } else {
        return response()->json([
            'success' => false,
            'message' => 'No avatar file received',
        ]);
    }
})->middleware(['auth']);

Route::get('/{catch?}', function () {
    return view('home'); // your start view
})->where('catch', '^(?!api).*$');



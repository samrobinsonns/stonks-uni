<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\User;

class AvatarController extends Controller
{
    public function uploadAvatar(Request $request)
    {
        $user = $request->user();

        if ($request->hasFile('avatar')) {
            // Delete the old avatar if it exists
            if ($user->avatar && Storage::exists($user->avatar)) {
                Storage::delete($user->avatar);
            }

            // Store the new avatar and update the user record
            $path = $request->file('avatar')->store('avatars');

            // Store the file path in the database
            $user->avatar_path = $path;
            $user->save();

            return response()->json([
                'success' => true,
                'avatar' => $user->avatar_path,
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'No avatar uploaded.',
        ]);
    }
}

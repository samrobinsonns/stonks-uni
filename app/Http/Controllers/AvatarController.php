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
            $file = $request->file('avatar');
            $filename = time().$file->getClientOriginalName();

            // Save the file to storage/app/public/avatars directory
            Storage::disk('public_uploads')->put($filename, file_get_contents($file));

            // Update the user's avatar field in the database
            $user->avatar_path = $filename;
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
    }
}

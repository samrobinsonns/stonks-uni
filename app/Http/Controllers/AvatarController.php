<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AvatarController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'avatar' => 'required|image|max:2048', // validate the uploaded file as an image with a max size of 2MB
        ]);

        $user = auth()->user(); // get the authenticated user
        $avatarName = $user->id . '_avatar.' . $request->file('avatar')->getClientOriginalExtension(); // generate a unique name for the avatar
        $request->file('avatar')->storeAs('avatars', $avatarName, 'public'); // store the avatar in the public disk under the 'avatars' directory

        $user->avatar = $avatarName; // update the user's avatar field with the new name
        $user->save();

        return response()->json(['message' => 'Avatar updated successfully.']);
    }
}

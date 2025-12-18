<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ChangeThemeController extends Controller
{
    public function SetTheme(Request $request)
    {
        // dd($request);
        $request->validate([
            'theme' => 'required|in:light,dark',
        ]);

        $user = $request->user();
        $user->theme = $request->input('theme');
        $user->save();

        return redirect()->back()->with('message', 'Tema berhasil diubah menjadi ' . $request->input('theme') . '.');
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Laravel\Socialite\Socialite;

class AuthController extends Controller
{
    // Menampilkan halaman login
   public function showLogin()
   {
    return Inertia::render('auth/login');
   }

    // Proses login manual
   public function login(Request $request)
   {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required']
    ]);

    if (Auth::attempt($credentials)){
        $request->session()->regenerate();
        return redirect()->intended('/');
    }

    return back()->withErrors([
        'email' => 'The provided credentials do not match our records.'
    ]);
   }

//    redirect to google for authentication
   public function redirectToGoogle()
   {
    return Socialite::drive('google')->redirect();
   }

   public function handleGoogleCallback()
   {
        try{
            $googleUser = Socialite::driver('google')->user();
            // dd($googleUser);

            // Cari user berdasarkan Google ID atau Email
            $user = User::where('google_id', $googleUser->id)       
                        ->orWhere('email', $googleUser->email)
                        ->first();

            if(!$user){
                $user = User::create([
                    'name' => $googleUser->name,
                    'email' => $googleUser->email,
                    'google_id' => $googleUser->id,
                    'password' => null,
                ]);
            } else {
                // update google_id if not set
                if(!$user->google_id){
                    $user->google_id = $googleUser->id;
                    $user->save();
                }
            }

            Auth::login($user);
            // LOGIKA CEK PASSWORD:
            // Jika password masih NULL, lempar ke halaman Set Password
            if (is_null($user->password)) {
                return redirect()->route('auth.set-password');
            }

            return redirect()->intended('/');

        } catch (\Exception $e) {
            dd($e);
            return redirect('/login')->with('error', 'Something went wrong while authenticating with Google.');
        }
   }

   // Tampilkan Form Set Password
    public function showSetPassword()
    {
        return Inertia::render('auth/SetPassword');
    }

    public function setPassword(Request $request)
    {
        $request->validate([
            'password' => 'required|min:8|confirmed',
        ]);

        /** @var \App\Models\User $user */
        $user->update([
            'password' => Hash::make($request->password) // Hashing password
        ]);

       return redirect()->route('home')->with('message', 'Password berhasil dibuat!'); 
    }

    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login');
    }

    // Menampilkan halaman register
    public function showRegister()
    {
        return Inertia::render('auth/register');
    }


}
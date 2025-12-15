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
    // 1. Tampilkan Halaman Login
    public function showLogin()
    {
        return Inertia::render('Auth/Login');
    }

    // 2. Proses Login Manual (Email & Password)
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/');
        }

        return back()->withErrors([
            'email' => 'Email atau password salah.',
        ]);
    }

    // 3. Redirect ke Google
    public function redirectToGoogle()
    {
       
        return Socialite::driver('google')->redirect();
    }

    // 4. Callback dari Google (LOGIKA INTI ADA DISINI)
    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();
            
            // Cari user berdasarkan Google ID atau Email
            $user = User::where('google_id', $googleUser->getId())
                        ->orWhere('email', $googleUser->getEmail())
                        ->first();

            if (!$user) {
                // Jika user belum ada, buat baru (Password NULL dulu)

                $user = User::create([
                    'google_id' => $googleUser->getId(),
                    'name' => $googleUser->getName(),
                    'email' => $googleUser->getEmail(),
                    'password' => null, // Password kosong
                    'email_verified_at' => now(),
                ]);
            } else {
                // Jika user ada tapi belum punya google_id (misal dulu daftar manual)
                if (!$user->google_id) {
                    $user->update(['google_id' => $googleUser->getId()]);
                }
            }

            // Login User tersebut
            Auth::login($user);

            // LOGIKA CEK PASSWORD:
            // Jika password masih NULL, lempar ke halaman Set Password
            if (is_null($user->password)) {
                return redirect()->route('auth.set-password');
            }

            return redirect()->intended('/');

        } catch (\Exception $e) {
            return redirect()->route('login')->with('error', 'Gagal login dengan Google.');
        }
    }

    // 5. Tampilkan Form Set Password
    public function showSetPassword()
    {
        return Inertia::render('auth/set-password');
    }

    // 6. Proses Simpan Password Baru
    public function storePassword(Request $request)
    {
        $request->validate([
            'password' => 'required|min:8|confirmed',
        ]);

        $user = Auth::user(); // User sudah login via Google tadi
        
        /** @var \App\Models\User $user */
        $user->update([
            'password' => Hash::make($request->password) // Hashing password
        ]);

        return redirect()->route('dashboard')->with('message', 'Password berhasil dibuat!');
    }
    
    // 7. Logout
    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/login');
    }
}
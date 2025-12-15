import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function SetPassword() {
    const { data, setData, post, processing, errors } = useForm({
        password: '',
        password_confirmation: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/auth/store-password');
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
                <h2 className="mb-2 text-center text-xl font-bold text-gray-800">
                    Buat Password
                </h2>
                <p className="mb-6 text-center text-sm text-gray-600">
                    Karena Anda baru pertama kali masuk via Google, silakan buat
                    password untuk keamanan akun.
                </p>

                <form onSubmit={submit} className="flex flex-col gap-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Password Baru
                        </label>
                        <input
                            type="password"
                            className="w-full rounded border p-2 text-black"
                            value={data.password}
                            onChange={
                                (e) => setData('password', e.target.value)
                                // console.log(e.target.value)
                            }
                        />
                        {errors.password && (
                            <div className="mt-1 text-sm text-red-500">
                                {errors.password}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Konfirmasi Password
                        </label>
                        <input
                            type="password"
                            className="w-full rounded border p-2 text-black"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                        />
                    </div>

                    <button
                        disabled={processing}
                        className="rounded bg-indigo-600 py-2 text-white hover:bg-indigo-700"
                    >
                        Simpan & Masuk
                    </button>
                </form>
            </div>
        </div>
    );
}

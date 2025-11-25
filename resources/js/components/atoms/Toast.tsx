import { usePage } from '@inertiajs/react';
import { CheckCircleIcon, X } from 'lucide-react';
import { useEffect, useState } from 'react';

// 1. Definisikan tipe data untuk Flash message
interface FlashProps {
    message?: string;
    success?: string;
    error?: string;
}

// 2. Definisikan tipe untuk Props global Inertia
// (Kamu bisa sesuaikan ini jika ada props lain seperti auth user)
interface PageProps {
    flash: FlashProps;
    [key: string]: unknown; // Mengizinkan properti lain
}

export default function Toast() {
    // 3. Masukkan Generics <PageProps> ke dalam usePage
    const { flash } = usePage<PageProps>().props;

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        // TypeScript sekarang tahu bahwa flash.message itu string | undefined
        if (flash.message) {
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    if (!visible || !flash.message) return null;

    return (
        <div className="fixed top-4 right-4 z-50 w-full max-w-sm">
            <div
                className={`/* Light Mode */ /* Dark Mode */ flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 shadow-sm transition-all duration-300 dark:border-green-800 dark:bg-green-900/30 dark:text-green-200`}
            >
                <div className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400" />
                    <div>
                        <p className="text-sm font-semibold">Berhasil!</p>
                        <p className="text-xs opacity-90">{flash.message}</p>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => setVisible(false)}
                    className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}

import { usePage } from '@inertiajs/react';
import { CheckCircleIcon, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Toast() {
    const { flash } = usePage().props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (flash.message) {
            setVisible(true);
            // Opsional: Auto close setelah 3 detik
            const timer = setTimeout(() => setVisible(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    if (!visible || !flash.message) return null;

    return (
        <div className="fixed top-4 right-4 z-50 w-full max-w-sm">
            <div
                className={`/* LIGHT MODE */ /* DARK MODE */ flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 shadow-sm transition-all duration-300 dark:border-green-800 dark:bg-green-900/30 dark:text-green-200`}
            >
                <div className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400" />
                    <div>
                        <p className="text-sm font-semibold">Berhasil!</p>
                        <p className="text-xs opacity-90">{flash.message}</p>
                    </div>
                </div>

                <button
                    onClick={() => setVisible(false)}
                    className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}

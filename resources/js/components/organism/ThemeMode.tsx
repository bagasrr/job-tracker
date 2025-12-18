import { SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react'; // Import router
import { Moon, Sun } from 'lucide-react';

const ThemeMode = () => {
    const { auth } = usePage<SharedData>().props;

    const handleToggleTheme = () => {
        const newTheme = auth.user.theme === 'light' ? 'dark' : 'light';

        // GUNAKAN ROUTER INERTIA, JANGAN FETCH
        router.post(
            '/personalization/set-theme',
            {
                theme: newTheme,
            },
            {
                preserveScroll: true, // Halaman tidak scroll ke atas
                onSuccess: () => {
                    // Tidak perlu window.location.reload(),
                    // Inertia otomatis merefresh props auth.user.theme
                    console.log('Tema berhasil diganti!', newTheme);
                },
                onError: (errors) => {
                    console.log('Gagal ganti tema:', errors);
                },
            },
        );
    };

    return (
        <div className="cursor-pointer text-black dark:text-white">
            {auth.user.theme === 'light' ? (
                <Sun onClick={handleToggleTheme} />
            ) : (
                <Moon onClick={handleToggleTheme} />
            )}
        </div>
    );
};

export default ThemeMode;

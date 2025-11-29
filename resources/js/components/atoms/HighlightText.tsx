interface Props {
    text: string;
    highlight: string;
}

export default function HighlightText({ text, highlight }: Props) {
    // 1. Jika tidak ada keyword pencarian, tampilkan teks polos
    if (!highlight.trim()) {
        return <span>{text}</span>;
    }

    // 2. Escape karakter regex (jaga-jaga user ketik tanda tanya '?', kurung '()', dll)
    const escapeRegExp = (str: string) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    // 3. Buat Regex: Case Insensitive (i) dan Global (g)
    const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'gi');

    // 4. Pecah text berdasarkan keyword
    const parts = text.split(regex);

    return (
        <span>
            {parts.map((part, i) =>
                // Jika bagian ini cocok dengan highlight (case insensitive)...
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <span
                        key={i}
                        className="rounded bg-yellow-200 px-0.5 font-semibold text-yellow-800 dark:bg-yellow-600 dark:text-white"
                    >
                        {part}
                    </span>
                ) : (
                    // Jika tidak cocok, render biasa
                    <span key={i}>{part}</span>
                ),
            )}
        </span>
    );
}

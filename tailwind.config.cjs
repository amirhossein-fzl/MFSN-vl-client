module.exports = {
    content: [
        './src/**/*.{svelte,html}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['IRANSans'],
                aviny: ['Aviny'],
            },
            borderRadius: {
                'theme': '8px',
            },
            colors: {
                'primary': {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                'secondary': {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                },
            },
        },
        screens: {
            'sm': '576px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1400px',
            // => @media (min-width: 1536px) { ... }
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        container: false,
    },
    plugins: [require('@tailwindcss/line-clamp'),],
}
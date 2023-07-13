tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            aspectRatio: {
                '8/7': '8 / 7',
            },
            colors: {
                primary: {
                    "50":"#eff6ff",
                    "100":"#BFBFBF",
                    "200":"#F23322",
                    "300":"#BF2C1F",
                    "400":"#8C241B",
                    "500":"#0D0D0D",
                    /*"600":"#2563eb",
                    "700":"#1d4ed8",
                    "800":"#1e40af",
                    "900":"#1e3a8a",
                    "950":"#172554"*/
                }
            }
        },
        fontFamily: {
            'body': [
                'Inter', 
                'ui-sans-serif', 
                'system-ui', 
                '-apple-system', 
                'system-ui', 
                'Segoe UI', 
                'Roboto', 
                'Helvetica Neue', 
                'Arial', 
                'Noto Sans', 
                'sans-serif', 
                'Apple Color Emoji', 
                'Segoe UI Emoji', 
                'Segoe UI Symbol', 
                'Noto Color Emoji'
            ],
            'sans': [
                'Inter', 
                'ui-sans-serif', 
                'system-ui', 
                '-apple-system', 
                'system-ui', 
                'Segoe UI', 
                'Roboto', 
                'Helvetica Neue', 
                'Arial', 
                'Noto Sans', 
                'sans-serif', 
                'Apple Color Emoji', 
                'Segoe UI Emoji', 
                'Segoe UI Symbol', 
                'Noto Color Emoji'
            ]
        }
    }
}
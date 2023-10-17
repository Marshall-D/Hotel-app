module.exports = {
    // purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    // darkMode: false, // or 'media' or 'class',
    content: [
        "./pages/**/*.tsx",
        "./src/**/*.tsx",
        "./src/components/**/*.tsx",
        "./src/themes/**/*.ts",
    ],
    theme: {
        extend: {
            fontFamily: {
                philosopher: ["Philosopher", "sans-serif"],
                dmSans: ["DM Sans", "sans-serif"],
            },
            backgroundImage: {
                "hero-pattern": "url('/img/woman.jpeg')",
                "hero-pattern-2": "url('/img/skyline.jpeg')",
            },
            colors: {
                success: {
                    dark: "#006e00",
                    DEFAULT: "#3CC13B",
                    light: "#c8ecc6",
                },
                warning: {
                    dark: "#ee7800",
                    DEFAULT: "#F3BB1C",
                    light: "#faf198",
                },
                error: {
                    dark: "#c2151d",
                    DEFAULT: "#F03738",
                    light: "#ffced4",
                },
                transparent: "transparent",
                primary: {
                    dark: "#B25100",
                    DEFAULT: "#ED6C00",
                    light: "#F6B680",
                    lightest: "#FEF8F2",
                },
                secondary: {
                    DEFAULT: "#2C599D",
                },
                black: { DEFAULT: "#303540", dark: "#0a0b0c" },
                grey: {
                    1: "#616569",
                    2: "#92979D",
                    3: "#C2C9D1",
                    4: "#E1E4E8",
                    5: "#F0F2F3",
                    6: "#F9FAFA",
                    7: "#FCFCFD",
                },
                blue: "#2F80ED",
            },
        },
    },
    plugins: [],
};

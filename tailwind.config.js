module.exports = {
    mode: "jit",
    purge: [
        "./resources/**/*.js",
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

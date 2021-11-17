import react from "@vitejs/plugin-react";

export default ({ command }) => ({
    base: command === "serve" ? "" : "/build/",
    publicDir: "fake_dir_so_nothing_gets_copied",
    build: {
        manifest: true,
        outDir: "public/build",
        rollupOptions: {
            input: "resources/js/app.js",
        },
    },
    css: {
        postCss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
    plugins: [react()],
});

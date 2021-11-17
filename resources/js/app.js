import "./bootstrap";
import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";

import "../css/app.css";

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob(`../views/react/**/*.jsx`);
        return (await pages[`../views/react/${name}.jsx`]()).default;
    },
    setup({ el, App, props, plugin }) {
        render(React.createElement(App, { ...props }), el);
    },
});

import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Components/Home";
import About from "../Components/About";
import MainLayout from "../Layouts/MainLayout";
import Register from "../Components/Register";
import Login from "../Components/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { index: true, Component: Home },
            { path: 'about', Component: About },
            { path: '/register', Component: Register },
            { path: '/login', Component: Login }
        ]
    },
]);

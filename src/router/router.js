import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../App/main.js";
import Home from "../App/home/home.js";
import Register from "../App/register/register.js";
import Search from "../App/search/search.js";
import Policies from "../App/policies/policies.js";
import Market from "../App/market/market.js";
import Login from "../App/login/login.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Navigate to={"home"} />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "search",
                element: <Search />,
            },
            {
                path: "policies",
                element: <Policies />,
            },
            {
                path: "market",
                element: <Market />,
            },
            {
                path: "login",
                element: <Login />,
            }
        ],
    }
]);

export default router;
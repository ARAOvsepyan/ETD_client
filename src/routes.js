import React from "react";
import { MAIN_ROUTE} from "./utils/consts";
import Main from "./pages/Main";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Element: <Main/>
    },
]
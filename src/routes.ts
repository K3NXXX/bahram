import { Home } from "./pages/Home/Home";
import { Auth } from "./pages/Auth/Auth";
import { ACCOUNT_ROUTE, ADDPOST_ROUTE, HOME_ROUTE, REGISTER_ROUTE } from "./utils/consts";
import { Account } from "./pages/Account/Account";
import { AddPost } from "./pages/AddPost/AddPost";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: REGISTER_ROUTE,
        Component: Auth
    },
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    },
    {
        path: ADDPOST_ROUTE,
        Component: AddPost
    },
]
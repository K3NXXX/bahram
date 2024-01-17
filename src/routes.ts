import { Home } from "./pages/Home/Home";
import { Auth } from "./pages/Auth/Auth";
import { ACCOUNT_ROUTE, ADDPOST_ROUTE, ESSENTIALS_ROUTE, FREELANCE_ROUTE, FULLPOST_ROUTE, HOME_ROUTE, HOW_NOT_TO_ROUTE, POSTS_CATEGORIES_ROUTE, REGISTER_ROUTE, SEO_ROUTE, TYPOGRAPHY_ROUTE, UI_DESIGN_ROUTE, UX_DESIGN_ROUTE } from "./utils/consts";
import { Account } from "./pages/Account/Account";
import { AddPost } from "./pages/AddPost/AddPost";
import { EssentialsPosts } from "./pages/Posts/EssentialsPosts";
import { FullPost } from "./pages/FullPost/FullPost";
import { FreelancePosts } from "./pages/Posts/FreelancePosts";
import { HowNotToPosts } from "./pages/Posts/HowNotToPosts";
import { SeoPosts } from "./pages/Posts/SeoPosts";
import { TypographyPosts } from "./pages/Posts/TypographyPosts";
import { UiDesignPosts } from "./pages/Posts/UiDesignPosts";
import { UxDesignPosts } from "./pages/Posts/UxDesignPosts";
import { PostCategories } from "./pages/PostCategories/PostCategories";

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
    {
        path: FREELANCE_ROUTE,
        Component: FreelancePosts
    },
    {
        path: HOW_NOT_TO_ROUTE,
        Component: HowNotToPosts
    },
    {
        path: SEO_ROUTE + '/:id',
        Component: SeoPosts
    },
    {
        path: TYPOGRAPHY_ROUTE + '/:id',
        Component: TypographyPosts
    },
    {
        path: UI_DESIGN_ROUTE + '/:id',
        Component: UiDesignPosts
    },
    {
        path: UX_DESIGN_ROUTE + '/:id',
        Component: UxDesignPosts
    },
    {
        path: ESSENTIALS_ROUTE,
        Component: EssentialsPosts
    },
    {
        path: ESSENTIALS_ROUTE,
        Component: EssentialsPosts
    },
    {
        path: POSTS_CATEGORIES_ROUTE,
        Component: PostCategories
    },
    
]
import uiDesign from "../assets/images/postCategories/uiDesign.png";
import uxDesign from "../assets/images/postCategories/uxDesign.png";
import popular from "../assets/images/postCategories/popular.png";
import freelance from "../assets/images/postCategories/freelance.png";
import seo from "../assets/images/postCategories/seo.png";
import typography from "../assets/images/postCategories/typography.png";
import essentials from "../assets/images/postCategories/essentials.png";
import howNotTo from "../assets/images/postCategories/howNotTo.png";
import {
    ESSENTIALS_ROUTE,
    FREELANCE_ROUTE,
    HOW_NOT_TO_ROUTE,
    POPULAR_ROUTE,
    SEO_ROUTE,
    TYPOGRAPHY_ROUTE,
    UI_DESIGN_ROUTE,
    UX_DESIGN_ROUTE,
} from "../utils/consts";

export type postCategoriesType = {
    id: number;
    title: string;
    description: string;
    image: string;
    route: string;
};

export const postCategories: postCategoriesType[] = [
    {
        id: 1,
        title: "UI design",
        description:
            "Every website is a user interface. Learn to build yours right.",
        image: uiDesign,
        route: UI_DESIGN_ROUTE,
    },
    {
        id: 2,
        title: "UX design",
        description:
            "Step-by-step instructions to make your very own agency site in 3layers.",
        image: uxDesign,
        route: UX_DESIGN_ROUTE,
    },
    {
        id: 3,
        title: "Popular",
        description:
            "Check out the most-read and most-shared posts from the 3layers blog.",
        image: popular,
        route: POPULAR_ROUTE,
    },
    {
        id: 4,
        title: "Freelance",
        description:
            "From tools to tips, everything you need to start — or grow — your freelance design career.",
        image: freelance,
        route: FREELANCE_ROUTE,
    },
    {
        id: 5,
        title: "SEO",
        description:
            "Everything you need to know to make sure your sites rank high in search.",
        image: seo,
        route: SEO_ROUTE,
    },
    {
        id: 6,
        title: "Typography",
        description:
            "The web is 99% typography. Make sure you're setting your type right.",
        image: typography,
        route: TYPOGRAPHY_ROUTE,
    },
    {
        id: 7,
        title: "Essentials",
        description: "Diffent interesting posts about everything.",
        image: essentials,
        route: ESSENTIALS_ROUTE,
    },
    {
        id: 8,
        title: "How not to",
        description:
            "Like a serving of snark with your web design advice? Then you're going to love these.",
        image: howNotTo,
        route: HOW_NOT_TO_ROUTE,
    },
];

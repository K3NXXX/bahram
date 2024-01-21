import image1 from "../assets/images/readingList/img1.jpg";
import image2 from "../assets/images/readingList/img2.jpg";
import image3 from "../assets/images/readingList/img3.jpg";
import image4 from "../assets/images/readingList/img4.jpg";
import image5 from "../assets/images/readingList/img5.jpg";
import {
    ESSENTIALS_ROUTE,
    POPULAR_ROUTE,
    SEO_ROUTE,
    UI_DESIGN_ROUTE,
    UX_DESIGN_ROUTE,
} from "../utils/consts";

export type readingListType = {
    id: number;
    image: string;
    description: string;
    route: string;
};

export const readingList: readingListType[] = [
    {
        id: 1,
        image: image1,
        description: "UI design",
        route: UI_DESIGN_ROUTE,
    },
    {
        id: 2,
        image: image2,
        description: "UX design",
        route: UX_DESIGN_ROUTE,
    },
    {
        id: 3,
        image: image3,
        description: "SEO",
        route: SEO_ROUTE,
    },
    {
        id: 4,
        image: image4,
        description: "Popular",
        route: POPULAR_ROUTE,
    },
    {
        id: 5,
        image: image5,
        description: "Essentials",
        route: ESSENTIALS_ROUTE,
    },
];

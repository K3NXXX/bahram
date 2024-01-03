import image1 from "../assets/images/readingList/img1.jpg"
import image2 from "../assets/images/readingList/img2.jpg"
import image3 from "../assets/images/readingList/img3.jpg"
import image4 from "../assets/images/readingList/img4.jpg"
import image5 from "../assets/images/readingList/img5.jpg"

export type readingListType = {
    id: number,
    image: string,
    description: string
}

export const readingList: readingListType[] = [
    {
        id:1,
        image: image1,
        description: 'UI design'
    },
    {
        id:2,
        image: image2,
        description: 'UX design'
    },
    {
        id:3,
        image: image3,
        description: 'SEO'
    },
    {
        id:4,
        image: image4,
        description: 'Popular'
    },
    {
        id:5,
        image: image5,
        description: 'Essentials'
    },
]
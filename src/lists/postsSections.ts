import { ESSENTIALS_ROUTE } from "../utils/consts"

export type postSectionsType = {
    id: number,
    title: string,
    route: string
}

export const postSections:postSectionsType[] = [
    {
        id: 1,
        title: 'Popular',
        route: ESSENTIALS_ROUTE
      
    },
    {
        id: 2,
        title: 'Essentials',
        route: ESSENTIALS_ROUTE
    },
    {
        id: 3,
        title: 'Freelance',
        route: ESSENTIALS_ROUTE
    },
]
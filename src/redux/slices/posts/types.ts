export type postType = {
    _id: string,
    title: string,
    text: string,
    tags: string[],
    imageUrl?: Blob | MediaSource,
    author: authorType
    username: string,
    viewsCount: number
}

type authorType = {
    username: string
}


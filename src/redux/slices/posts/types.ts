export type postType = {
    _id: string,
    title: string,
    text: string,
    tags: string[],
    imageUrl?: Blob | MediaSource,
    author: authorType
}

type authorType = {
    username: string
}


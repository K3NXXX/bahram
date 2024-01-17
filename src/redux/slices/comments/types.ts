export type createCommentData = {
    id: string,
    comment: string | undefined,
    checkbox?: boolean
}

export type commentType = {
    _id: string,
    comment: string,
    createdAt: string,
    author: string
}

export type getAllCommentsType = {
    id: string
}
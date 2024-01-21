export type postType = {
    _id: string;
    title: string;
    text: string;
    type: string;
    tags: string[];
    imageUrl?: Blob | MediaSource;
    author: string;
    username: string;
    viewsCount: number;
};

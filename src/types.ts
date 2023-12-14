export interface PageTitle {
    title: string
    content_1: string
    content_2: string
}

export interface imageMedia{
    public_path: string,
    storage_path: string
}

export interface News {
    id: string,
    title: string,
    content: string,
    image: imageMedia,
    tags: string,
    status: number,
}

export interface Instructors{
    id:string,
    name:string,
    description:string,
    profile_photo_path:string
}
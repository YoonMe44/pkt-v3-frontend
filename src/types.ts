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

export interface ApplicationForm {
    id: string,
    name: string,
    birthday: string,
    gender:string,
    address: string,
    phone: string,
    email: string,
    visa: string,
    job: string,
    cv: imageMedia,
    n3: imageMedia,
    n2: imageMedia,
    n1: imageMedia | null,
    nrc_front: imageMedia,
    nrc_back: imageMedia,
    census_front: imageMedia,
    census_back: imageMedia,
    passport: imageMedia,
    photo: imageMedia,
    intro_vd: imageMedia
}

export interface Instructors{
    id:string,
    name:string,
    description:string,
    profile_photo_path:string
}
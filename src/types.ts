export interface PageTitle {
    title: string
    content_1: string
    content_2: string
}

export interface imageMedia{
    public_path: string,
    storage_path: string
}

export interface Client {
    id:string
    name: string,
    email: string,
    email_verified_at: string,
    password: string,
    phone: string,
    birthday: string,
    address: string,
    country: string,
    business: string,
    description: string,
    profile_photo_path: imageMedia
}

export interface InterviewProps {
    id: string,
    client_id: string,
    client: Client,
    applicant_id: string,
    applicant:ApplicationForm,
    client_status: string,
    status: string,
    invite_link: string,
    invitation_time: string,
    time_zone:string,
    meeting_id: string,
    completed:string,
    pass_code: string,
    description: string,
    created_by: string,
    updated_by: string,
    created_at: string,
    updated_at: string
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
    status: string,
    cv: imageMedia,
    jft: imageMedia,
    edu: imageMedia,
    tokutei_certificate:imageMedia,
    medical_certificate: imageMedia,
    n4: imageMedia,
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
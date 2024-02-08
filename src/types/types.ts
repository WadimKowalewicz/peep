export type ProfileType = {
    userId: number
    lookingFarAJob: boolean
    lookingFarAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type UserType = {
    id: number
    name: string
    photos: PhotosType
    status: string | null,
    followed: boolean
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type PostsType = {
    id: number
    ava: string
    message: string
    likesCount: number
}
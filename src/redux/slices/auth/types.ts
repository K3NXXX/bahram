export type initialStateType = {
    user: null | object,
    token: null | string,
    isLoading: boolean,
    status: null | string
}

export type registerData = {
    username: string,
    email: string,
    password: string
}

export type loginData = {
    email: string,
    password: string
}
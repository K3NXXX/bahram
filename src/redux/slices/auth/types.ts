export type initialStateType = {
    user: null | userType;
    token: null | string;
    isLoading: boolean;
    status: null | string;
};

export type registerData = {
    username: string;
    email: string;
    password: string;
};

export type loginData = {
    email: string;
    password: string;
};

export type userType = {
    email: string;
    username: string;
    createdAt: string;
    posts: string[];
    avatar: string;
    _id: string;
};

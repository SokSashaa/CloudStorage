import axios from "@/_core/axios";
import {LoginFormDto, LoginResponseDto, RegisterFormDTO, User} from "@/_api/dto/auth.dto";
import {destroyCookie} from "nookies";


export const login = async (values: LoginFormDto): Promise<LoginResponseDto> => {
    return (await axios.post('/auth/login', values)).data
}

export const register = async (values: RegisterFormDTO): Promise<LoginResponseDto> => {
    return (await axios.post('/auth/register', values)).data
}

export const getMe = async (): Promise<User> => {
    return (await axios.get('/users/me')).data
}

export const logout = () => {
    destroyCookie(null, '_token', {path: '/'})
}
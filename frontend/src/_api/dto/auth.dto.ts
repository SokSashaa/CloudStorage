export type LoginFormDto = {
    email:string,
    password:string
}

export type LoginResponseDto = {
    token:string
}

export type RegisterFormDTO = LoginFormDto & {firstName:string,lastName:string}
export type RegisterResponseDTO = RegisterFormDTO

export type User = Omit<RegisterFormDTO, 'password'> & {
    id:number,
}
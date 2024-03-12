import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export const checkAuth = ()=>{
    if(!cookies().get('_token')) redirect('/dashboard/auth')
}
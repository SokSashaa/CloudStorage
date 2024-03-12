'use client'
import React, {FC, useState} from "react";
import {User} from "@/_api/dto/auth.dto";
import * as Api from "@/_api";
import {Button} from "antd";

const ProfileItem: FC = () => {

    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            Api.auth.logout();
            location.href = "/";
        }
    };

    const [userData,setUser] = useState<User>()
    Api.auth.getMe().then(setUser)
    if(userData)
    {
    return (

        <>
            <br/>
            <p>
                ID: <b>{userData.id}</b>
            </p>
            <p>
                Имя: <b>{userData.firstName}</b>
            </p>
            <p>
                Фамилия: <b>{userData.lastName}</b>
            </p>
            <p>
                E-Mail: <b>{userData.email}</b>
            </p>
            <br/>
            <Button onClick={onClickLogout} type="primary" danger>
                Выйти
            </Button>
        </>
    )
    }
}
export default ProfileItem
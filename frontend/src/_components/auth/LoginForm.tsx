'use client'
import {FC} from "react";
import {Button, Form, Input, notification} from "antd";
import styles from './Auth.module.scss'
import {LoginFormDto} from "@/_api/dto/auth.dto";
import * as Api from '@/_api'
import {setCookie} from "nookies";


const LoginForm:FC=()=>{

    const onSubmit = async (values:LoginFormDto)=>{
        try{
            const { token } = await Api.auth.login(values)

            notification.success({
                message:'Успешно',
                description:'Переходим в админку',
                duration:2
            })

            setCookie(null,"_token",token,{
                path:'/'
            })

            location.href = "/dashboard";
        }
        catch (err){
            console.warn('LoginForm',err)
        }
    }

    return(
        <div className={styles.formBlock}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                 onFinish={onSubmit}
            >
                <Form.Item
                    label="E-Mail"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Укажите почту",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Укажите пароль",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginForm
'use client'
import React, {FC} from "react";
import { setCookie } from "nookies";
import styles from "./Auth.module.scss";
import { Button, Form, Input, notification } from "antd";
import {RegisterFormDTO} from "@/_api/dto/auth.dto";

import * as Api from '@/_api'

const RegisterForm: FC = () => {
    const onSubmit = async (values: RegisterFormDTO) => {
        try {
            const { token } = await Api.auth.register(values);

            notification.success({
                message: "Успешно!",
                description: "Переходим в админ-панель...",
                duration: 2,
            });

            setCookie(null, "_token", token, {
                path: "/",
            });

            location.href = "/dashboard";
        } catch (err) {
            console.warn(err);

            notification.error({
                message: "Ошибка!",
                description: "Ошибка при регистрации",
                duration: 2,
            });
        }
    };

    return (
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
                    label="Имя"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: "Укажите имя",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Фамилия"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: "Укажите фамилию",
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
                        Регистрация
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegisterForm
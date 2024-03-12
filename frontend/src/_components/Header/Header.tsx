'use client'
import {FC} from "react";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import styles from "./Header.module.scss";
import { CloudOutlined } from "@ant-design/icons";
import styled from './Header.module.scss'

import * as Api from "@/_api";
import {router} from "next/client";
import { useRouter } from 'next/navigation'

export const Header: FC = () => {
    const router = useRouter();
    //const selectedMenu = router.pathname;

    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            Api.auth.logout();
            location.href = "/";
        }
    };

    return (
        <Layout.Header className={styles.root}>
            <div className={styles.headerInner}>
                <div className={styles.headerLeft}>
                    <h2>
                        <CloudOutlined />
                        Cloud Storage
                    </h2>

                    <Menu
                        className={styles.topMenu}
                        theme="dark"
                        mode="horizontal"
                        //defaultSelectedKeys={[selectedMenu]}
                        onSelect={({ key }) => router.push(key)}
                        items={[
                            { key: "/dashboard", label: "Главная" },
                            { key: "/dashboard/profile", label: "Профиль" },
                        ]}
                    />
                </div>

                <div className={styles.headerRight}>
                    <Popover
                        trigger="click"
                        content={
                            <Button onClick={onClickLogout} type="primary" danger>
                                Выйти
                            </Button>
                        }
                    >
                        <Avatar>A</Avatar>
                    </Popover>
                </div>
            </div>
        </Layout.Header>
    );
};
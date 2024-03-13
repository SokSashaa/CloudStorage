'use client'
import {FC, PropsWithChildren, ReactNode} from "react";
import styles from "@/_styles/Home.module.scss";
import { useRouter } from "next/navigation";
import UploadButton from "@/_components/UploadButton/UploadButton";
import { Menu } from "antd";
import {
    DeleteOutlined,
    FileImageOutlined,
    FileOutlined,
} from "@ant-design/icons";

export default function DashboardLayout ({children}:Readonly<{children:ReactNode}>) {
    const router = useRouter();


    return (
        <main className={styles.dashboardContainer}>
            <div className={styles.sidebar}>
                {<UploadButton />}
                <Menu
                    className={styles.menu}
                    mode="inline"
                    items={[
                        {
                            key: `/dashboard`,
                            icon: <FileOutlined />,
                            label: `Файлы`,
                            onClick: () => router.push("/dashboard"),
                        },
                    ]}
                />
            </div>

            <div className="container">{children}</div>
        </main>
    );
};
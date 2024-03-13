import {FC} from "react";
import styles from "./FileCard.module.scss";
import { FileTextOutlined } from "@ant-design/icons";

type FileCardProps = {
    originalName: string;
}

const FileCard: FC<FileCardProps> = ({originalName}) => {
    return (
        <div className={styles.root}>
            <div className={styles.icon}>
                <FileTextOutlined />
            </div>
            <span>{originalName}</span>
        </div>
    );
};

export default FileCard
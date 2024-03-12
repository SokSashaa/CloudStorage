import {FC} from "react";
import styles from "./FileCard.module.scss";
import { FileTextOutlined } from "@ant-design/icons";
import {getExtensionFromFileName} from "@/_utils/getExtensionFromFileName";

type FileCardProps = {
    filename: string;
    originalName: string;
}

const FileCard: FC<FileCardProps> = ({originalName, filename}) => {
    const ext = getExtensionFromFileName(filename);
    return (
        <div className={styles.root}>
            <div className={styles.icon}>
                <i>{ext}</i>
                <FileTextOutlined />
            </div>
            <span>{originalName}</span>
        </div>
    );
};

export default FileCard
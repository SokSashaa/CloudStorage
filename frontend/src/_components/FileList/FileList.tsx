'use client'
import {FC, useState} from "react";
import styles from "./FileList.module.scss";
import { FileItem } from "@/_api/dto/files.dto";
import  FileCard  from "@/_components/FilesCard/FileCard";
import Selecto from "react-selecto";
import * as Api from "@/_api";

export type FileSelectType = "select" | "unselect";

interface FileListProps {
    items: FileItem[];
    onFileSelect: (id: string, type: FileSelectType) => void;
}

export const FileList: FC = () => {

    const [files,setFiles] = useState<FileItem[]>([])
    const filesItem = Api.files.getAllFiles().then(setFiles)
    console.log(files)

    return (
        <div className={styles.root}>
            {files.map((item) => (
                <div data-id={item.id} key={item.id} className="file" >
                    {/*<FileCard filename={item.filename} originalName={item.originalName} />*/}
                </div>
            ))}

            {/*<Selecto*/}
            {/*    container=".files"*/}
            {/*    selectableTargets={[".file"]}*/}
            {/*    selectByClick*/}
            {/*    hitRate={10}*/}
            {/*    selectFromInside*/}
            {/*    toggleContinueSelect={["shift"]}*/}
            {/*    continueSelect={false}*/}
            {/*    onSelect={(e) => {*/}
            {/*        e.added.forEach((el) => {*/}
            {/*            el.classList.add("active");*/}
            {/*            onFileSelect(Number(el.dataset["id"]), "select");*/}
            {/*        });*/}
            {/*        e.removed.forEach((el) => {*/}
            {/*            el.classList.remove("active");*/}
            {/*            onFileSelect(Number(el.dataset["id"]), "unselect");*/}
            {/*        });*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    );
};
import {diskStorage} from "multer";
import {FileEntity} from "./entities/file.entity";

const generateID = ()=>{
    return Array(18)
        .fill(null)
        .map(()=>Math.round(Math.random()*16).toString(16))
        .join('');
};

const normalSizeFileName = (req,file,callback)=>{
    const fileExtName = file.originalname.split('.').pop();

    callback(null, `${generateID()}.${fileExtName}`)
}
export const fileStorage = diskStorage(
    {
        destination:'./uploads',
        filename:normalSizeFileName
    }
)
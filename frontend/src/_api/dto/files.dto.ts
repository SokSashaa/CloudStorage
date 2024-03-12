import { User } from "@/_api/dto/auth.dto";

export type FileItem = {
    filename: string;
    originalName: string;
    size: number;
    mimetype: string;
    user: User;
    deletedAt: string | null;
    id: number;
}
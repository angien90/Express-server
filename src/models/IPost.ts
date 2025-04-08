// För korrekt Typescript 
import { RowDataPacket } from "mysql2";

export interface IPost extends RowDataPacket{
    id: number; 
    titel: string;
    content: string;
    author: string;
}
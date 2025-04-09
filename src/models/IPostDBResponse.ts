import { RowDataPacket } from "mysql2";

export interface IPostDBResponse extends RowDataPacket{
  post_id: number
  post_title: string
  post_content: string
  post_author: string
  post_created_at: string
  subtask_id: number
  subtask_post_id: number
  subtask_content: string
  subtask_author: string
  subtask_created_at: string
}
import { Request, Response } from "express";
import { db } from "../config/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { IPost } from "../models/IPost";
import { IPostDBResponse } from "../models/IPostDBResponse";

// Filtrering av Author (t.ex localhost:3000/posts?filter=Nisse Hult)
export const fetchAllPosts = async (req: Request, res: Response) => {    
    const search = req.query.search
    const sort = req.query.sort
    
    let sql = 'SELECT * FROM posts';
    let params: any = [];
    let searchSQL = "";
    let sortSQL = "";

    try {
        if (search) {
            searchSQL
            searchSQL = " WHERE content LIKE ? ";
            params = [`%${search}%`]
        }

        if (sort) {
            const OrderBy = sort === 'dest' ? 'DEST' : 'ASC'
            sortSQL = " ORDER BY content " + OrderBy
        }
 
    sql = sql +searchSQL + sortSQL
    const [rows] = await db.query<RowDataPacket[]>(sql, params)
    res.json({rows}) 
    } catch(error:unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error:message})
        }
    }

// Hitta ID med path params (t.ex. localhost:3000/posts/123)
export const fetchPost = async (req: Request, res: Response) => {
    const id = req.params.id
    
try {
    const sql = `
      SELECT 
        posts.id AS post_id,
        posts.title AS post_title,
        posts.content AS post_content,
        posts.author AS post_author,
        posts.created_at AS post_created_at,
        subtasks.id AS subtask_id,
        subtasks.post_id AS subtask_post_id,
        subtasks.content AS subtask_content,
        subtasks.author AS subtask_author,
        subtasks.created_at AS subtask_created_at
      FROM posts
      LEFT JOIN subtasks ON posts.id = subtasks.post_id
      WHERE posts.id = ?
    `

const [rows] = await db.query<IPostDBResponse[]>(sql, [id])
const post = rows[0];
if (!post) {
    res.status(404).json({message: 'Posts not found'})
    return;
}
res.json(formatPost(rows))
  } catch(error: unknown) {
    const message = error  instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({error: message})
  }
}

const formatPost = (rows: IPostDBResponse[]) => ({
    id:         rows[0].post_id,
    title:      rows[0].post_content,
    content:    rows[0].post_done,
    author:     rows[0].post_author,
    created_at: rows[0].post_created_at,
    subtasks: rows.map((row) => ({
        id:        row.subtask_id,
        post_id:   row.subtask_post_id,
        content:   row.subtask_content,
        author:    row.subtask_author,
        created_at:row.subtask_created_at
    }))
  })

// Lägg till ett nytt blogginlägg med hjälp av anropet post & Insomnia
export const createPost = async (req: Request, res: Response) => {
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;

    if (!title || !content || !author) {
        res.status(400).json({ error: 'Title, content och author krävs' }); 
        return; 
    }

    try {
        const sql = `
        INSERT INTO posts (title, content, author)
        VALUES (?, ?, ?)
        `
        const [result] = await db.query<ResultSetHeader>(sql, [title, content, author])
        res.status(201).json({message: 'Post created', id: result.insertId})
        } catch(error: unknown) {
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
      }
    }

// Ändra en betinlig bloggpost med hjälp av anropet patch
export const updatePost = (req: Request, res: Response) => {
    /* const {titel, content, author} = req.body

    if (titel === undefined || content === undefined || author === undefined) {
        res.status(400).json({error: 'Titel, content och author är krävande'})
        return;
    }

    const post = posts.find((p) => p.id === parseInt(req.params.id))
    if (!post) {
        res.status(404).json({error: 'Bloggpost kunde inte hittas'})
        return; 
    }

    post.titel = titel;
    post.content = content;
    post.author = author;
    res.status(200).json({message: 'Bloggpost är uppdaterad', data: post})*/
}

// Ta bort ett befintligt objekt med hjälp av anropet delete
export const deletePost = async (req: Request, res: Response) => {
    const id = req.params.id

    try {
        const sql = `
          DELETE FROM posts
          WHERE id = ?
        `
        const [result] = await db.query<ResultSetHeader>(sql, [id])
        if (result.affectedRows === 0) {
          res.status(404).json({message: 'Post not found'})
          return;
        }
        res.json({message: 'Post deleted'})
        } catch (error: unknown) {
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
}
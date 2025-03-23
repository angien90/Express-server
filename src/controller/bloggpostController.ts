import { Request, Response } from "express";
import { Posts } from "../models/Posts";

// Bloggposter
const posts: Posts[] = [
    new Posts('Bloggpost 1', 'Innehåll 1', 'Nisse Hult'),
    new Posts('Bloggpost 2', 'Innehåll 2', 'Kalle Anka'),
    new Posts('Bloggpost 3', 'Innehåll 3', 'Musse Pig'),
]

// Filtrering av Author (t.ex localhost:3000/posts?filter=Nisse Hult)
export const fetchAllPosts = (req: Request, res: Response) => {    
    const filter = req.query.filter
    const sort = req.query.sort;
    let filteredPosts = posts;
    
    try {
    if(filter) {
        filteredPosts = filteredPosts.filter((p) => p.author.includes(filter.toString()))
    }

    // Sortering av Titel (localhost:3000/posts?sort=asc (minst till störst))
    if (sort && sort === "asc") {
        filteredPosts = filteredPosts.sort((a, b) => {
            const post1 = a.titel.toLowerCase()
            const post2 = b.titel.toLowerCase()

            if (post1 > post2) return 1 // True
            if (post1 < post2) return -1 // Fasle
            return 0; // Equal
        })
    }

    // Sortering av Titel (localhost:3000/posts?sort=desc (störst till minst))
    if (sort && sort === "desc") {
        filteredPosts = filteredPosts.sort((a, b) => {
            const post1 = a.titel.toLowerCase()
            const post2 = b.titel.toLowerCase()

            if (post1 < post2) return 1 // True
            if (post1 > post2) return -1 // Fasle
            return 0; // Equal
        })
    }

    res.json({filteredPosts}) 
    } catch(error:unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error:message})
        }
    }

// Hitta ID med path params (t.ex. localhost:3000/posts/123)
export const fetchPost = (req: Request, res: Response) => {
    const id = req.params.id
    const post = posts.find((p) => p.id === parseInt(id))

    res.json({post})
}

// Lägg till ett nytt blogginlägg med hjälp av anropet post & Insomnia
export const createPost = (req: Request, res: Response) => {
    const titel = req.body.titel;
    const content = req.body.content;
    const author = req.body.author;

    const newPost = new Posts(titel, content, author);
    posts.push(newPost)

    res.status(201).json({message: 'Bloggpost är skapad'})
}

// Ändra en betinlig bloggpost med hjälp av anropet patch
export const updatePost = (req: Request, res: Response) => {
    const {titel, content, author} = req.body

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
    res.status(200).json({message: 'Bloggpost är uppdaterad', data: post})
}

// Ta bort ett befintligt objekt med hjälp av anropet delete
export const deletePost = (req: Request, res: Response) => {
    const id = req.params.id

    const postIndex = posts.findIndex((p) => p.id === parseInt(id))
    if (postIndex === -1) {
        res.status(404).json({error: 'Bloggpost kunde inte hittas'})
        return;
    }

    posts.splice(postIndex, 1)
    res.json({message: 'Bloggpost togs bort'})
}
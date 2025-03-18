import express, { Request, Response } from 'express';
import { Posts } from './models/Posts';
const app = express();

app.get('/', (_: Request, res: Response) => {
    res.send('Hello World')
  })

const posts: Posts[] = [
    new Posts('Bloggpost 1', 'Innehåll 1', 'Nisse Hult'),
    new Posts('Bloggpost 2', 'Innehåll 2', 'Kalle Anka'),
    new Posts('Bloggpost 3', 'Innehåll 3', 'Musse Pigg'),
]

app.get('/posts', (_: Request, res: Response) => {
    res.json(posts)
})


const PORT = 3000
app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`)
})


// Serven http://localhost:3000 visar Hello World.
// Serven http://localhost:3000/Posts visar ovan posts.
// Classer hämtas från Posts.ts

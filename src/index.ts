import express, { Request, Response } from 'express';
import { Posts } from './models/Posts';
const app = express();

// Startsidan
app.get('/', (_: Request, res: Response) => {
    res.send('Hello World')
  })

// Bloggposter
const posts: Posts[] = [
    new Posts('Bloggpost 1', 'Innehåll 1', 'Nisse Hult'),
    new Posts('Bloggpost 2', 'Innehåll 2', 'Kalle Anka'),
    new Posts('Bloggpost 3', 'Innehåll 3', 'Musse Pigg'),
]

// Skriv ut en listan över alla bloggposter (Kommenteras ut när man vill köra nedan funktioner) 
app.get('/posts', (_: Request, res: Response) => {
    res.json(posts)
})

// Filtrering av Author (t.ex localhost:3000/posts?filter=Nisse Hult)
// (Kommenteras ut när man vill köra andra funktioner)
/* app.get('/posts', (req: Request, res: Response) => {
    const filter = req.query.filter
    let filteredPosts = posts;
    
    if(filter) {
        filteredPosts = posts.filter((posts) => posts.author.includes(filter.toString()))
    }

    res.json(filteredPosts)
})*/ 

// Sortering av Titel (localhost:3000/posts?sort=asc (minst till störst) & localhost:3000/posts?sort=desc (störst till minst))
//(Kommenteras ut när man vill köra andra funktioner)
/*app.get('/posts', (req: Request, res: Response) => {
    const sort = req.query.sort;
    let sortedPosts = posts;

    if (sort) {
        sortedPosts.sort((a, b) => {
            const post1 = a.titel.toLowerCase();
            const post2 = b.titel.toLowerCase();

            if (post1 > post2) return 1; // True
            if (post1 < post2) return -1; // Fasle
            return 0; // Equal
        });

        if (sort === 'desc') {
            sortedPosts.reverse();
        }
    }

    res.json(sortedPosts);
}) */

// Hitta ID (t.ex. localhost:3000/posts/123)
// För att köra denna funktion slå på utskift av hela blogglistan med.
app.get('/posts/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const post = posts.find((p) => p.id === parseInt(id))

    res.json({post})
})

// Port 3000
const PORT = 3000
app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`)
})


// Serven http://localhost:3000 visar Hello World.
// Serven http://localhost:3000/Posts visar ovan posts.
// Classer hämtas från Posts.ts

// Filtrering och sortering av bloggposter sker med hjälp av Query string.
// Filtrering av id sker med hjälp av Path params.
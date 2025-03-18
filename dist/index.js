"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Posts_1 = require("./models/Posts");
const app = (0, express_1.default)();
app.get('/', (_, res) => {
    res.send('Hello World');
});
const posts = [
    new Posts_1.Posts('Post 1', 'Innehåll post 1', 'Nisse Hult'),
    new Posts_1.Posts('Post 2', 'Innehåll post 2', 'Kalle Anka'),
];
app.get('/posts', (_, res) => {
    res.json(posts);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

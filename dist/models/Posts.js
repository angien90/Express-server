"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
class Posts {
    constructor(titel, content, author) {
        this.id = 0;
        this.titel = "";
        this.content = "";
        this.author = "";
        this.id = Math.round(Math.random() * 1000);
        this.titel = titel;
        this.content = content;
        this.author = author;
    }
}
exports.Posts = Posts;

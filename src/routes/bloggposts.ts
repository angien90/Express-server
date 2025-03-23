import express from 'express';

import {
    fetchAllPosts,
    fetchPost,
    createPost,
    deletePost,
    updatePost } from '../controller/bloggpostController';

    const router = express.Router()

    router.get('/', fetchAllPosts)
    router.get('/:id', fetchPost)
    router.post('/', createPost)
    router.patch('/:id', updatePost)
    router.delete('/:id', deletePost)

    export default router; 
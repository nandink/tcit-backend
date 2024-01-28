import {Router} from 'express'
import {getPosts, createPost, deletePost} from '../controllers/posts.controller.js'

const router= Router()

router.get('/posts', getPosts) //get all posts
//router.get('/posts/:id') //get post by id
router.post('/posts', createPost) //create post
router.delete('/posts/:id', deletePost) //delete post by id






export default router;
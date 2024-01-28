import {Post} from '../models/Post.js'

export const getPosts = async (req, res) => {
    try{
        const posts = await Post.findAll()
        res.json(posts)
    }
    catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    const {title, description} = req.body
    try{   
        const newPost = await Post.create({
            title,
            description
        })
        res.json(newPost)
    }
    catch(error){
        return res.status(500).json({message: error.message})
    }
}


export const deletePost = async (req, res) => {
    const {id} = req.params
    try{
        const post = await Post.destroy({
            where:{
                id
            }
        })
        res.sendStatus(204)
    }
    catch(error){
        return res.status(500).json({message: error.message})
    }
}
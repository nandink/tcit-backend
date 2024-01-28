import express from 'express'
import postRoutes from './routes/posts.routes.js'


const app = express()

//middlewares
app.use(express.json())


app.use(postRoutes)


export default app;
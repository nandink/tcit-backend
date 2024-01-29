import express from 'express'
import postRoutes from './routes/posts.routes.js'
import cors from 'cors'




const app = express()
app.use(cors())

//middlewares
app.use(express.json())


app.use(postRoutes)


export default app;
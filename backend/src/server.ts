import 'express-async-errors'
import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routes';
import { errorMiddleware } from './middlewares/error';
import cors from 'cors'


AppDataSource.initialize().then(() =>{
    const app = express()

    app.use(express.json())
    
    app.use(cors())

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE')
        next()
    })
    app.use(routes)

    app.use(errorMiddleware)
    return app.listen(process.env.PORT)
})
import { Router } from "express"
import { UserController } from "./controllers/UserController"
import { authMiddleware } from "./middlewares/authMidlleware"

const routes = Router()

routes.get('/', authMiddleware, new UserController().getUsers)
routes.post('/create', authMiddleware, new UserController().create)
routes.post('/login', new UserController().login)
routes.post('/logout', new UserController().logout)
routes.get('/feedUsers', authMiddleware, new UserController().getUsers)

export default routes
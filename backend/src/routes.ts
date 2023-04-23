import { Router } from "express"
import { UserController } from "./controllers/UserController"
import { authMiddleware } from "./middlewares/authMidlleware"

const routes = Router()

routes.post('/user', authMiddleware, new UserController().create)
routes.post('/login', new UserController().login)
routes.post('/logout', new UserController().logout)
//routes.patch('/update', authMiddleware, new UserController().patchUser)
routes.get('/feedUsers', authMiddleware, new UserController().getUsers)

//routes.post('/inputMaterials', authMiddleware, new UserController().inputMaterials)

export default routes
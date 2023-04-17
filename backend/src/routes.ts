import { Router } from "express"
import { UserController } from "./controllers/UserController"
import { ProfileController } from "./controllers/profileController"

const routes = Router()

routes.post('/user', new UserController().create)
routes.post('/profile', new ProfileController().create)
export default routes
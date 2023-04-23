import { Request, Response } from "express"
import { userRepository } from "../repositories/userRepository"
import { BadRequestError, UnauthorizedError } from "../helpers/api-errors"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { profileRepository } from "../repositories/ProfileRepository"

export class UserController {
    async create(req: Request, res: Response) {

        const { name } = req.body
        const { cpf } = req.body
        const { email } = req.body
        const { password_user } = req.body
        const { is_active } = req.body
        const { profile_id } = req.body

        const userExists = await userRepository.findOneBy({ cpf, email })

        if (userExists) {
            throw new BadRequestError('CPF ou E-mail existe!')
        }

        const hashPassword = await bcrypt.hash(password_user, 10)

        const profile = await profileRepository.findOneBy({id: profile_id})

        if (!profile) {
            throw new BadRequestError('Perfil não existe')
        }

        const newUser = userRepository.create({
            name,
            cpf,
            email,
            password: hashPassword,
            profile: profile!
        })

        console.table(newUser)

        await userRepository.save(newUser)

        const { password: _, ...user } = newUser
        console.log(user)

        return res.status(201).json(user)
    }

    async login(req: Request, res: Response) {
        const { email, password_user } = req.body

        const user = await userRepository.findOneBy({ email })

        if (!user) {
            throw new BadRequestError('E-mail ou senha inválidos!')
        }

        const verifyPass = await bcrypt.compare(password_user, user.password)

        if (!verifyPass) {
            throw new BadRequestError('E-mail ou senha inválidos!')
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', { expiresIn: '8h', })

        const {password: _, ...userLogin} = user

        return res.json({
            user: userLogin,
            token: token,
        })
    }

    async logout(req: Request, res: Response){
        res.json({ auth: false, token: null });
    }

    // async patchUser(req: Request, res: Response){
    //     return null
    // }

    async getUsers(req: Request, res: Response){
        return res.send(req.user)
    }
}
import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";

export class UserController{    
    async create(req: Request, res:Response){
        const { name } = req.body
        const { cpf } = req.body
        const { register } = req.body
        const { password_user } = req.body
        const { active } = req.body
        const { profile } = req.body

        if(!name){
            return res.status(400).json({message: "O nome é obrigatório"})
        }

        try {
            const newUser = userRepository.create({ name, cpf, register, password_user, active, profile })

            await userRepository.save(newUser)

            return res.status(201).json(newUser)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }
}
import { Request, Response } from "express";
import { profileRepository } from "../repositories/ProfileRepository";

export class ProfileController{    
    async create(req: Request, res:Response){
        const { name } = req.body

        if(!name){
            return res.status(400).json({message: "O nome é obrigatório"})
        }

        try {
            const newProfile = profileRepository.create({ name })

            await profileRepository.save(newProfile)

            return res.status(201).json(newProfile)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }
}
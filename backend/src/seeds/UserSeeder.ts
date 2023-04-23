import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import User from "../entities/User";
import bcrypt from "bcrypt";
import { ProfileUsers } from "../entities/ProfileUsers";
import { profileRepository } from "../repositories/ProfileRepository";

export class UserSedeer implements Seeder{
    async run(dataSource: DataSource, 
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const userRepository = dataSource.getRepository(User)

        const newUser = userRepository.create({
            id: 1,
            name: "Admin",
            cpf: '000.000.000-00',
            email: "admin@admin.com",
            password: await bcrypt.hash('admin', 10),
            is_active: true,
            profile: {
                id: 1,
                name: 'Admin'
            }
        })
        console.log(newUser)
        await userRepository.save(newUser)
    }
}
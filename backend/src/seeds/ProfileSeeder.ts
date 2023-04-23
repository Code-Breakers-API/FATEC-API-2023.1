import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { ProfileUsers } from "../entities/ProfileUsers";

export class ProfileSedeer implements Seeder{
    async run(dataSource: DataSource, 
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const profileRepository = dataSource.getRepository(ProfileUsers)

        const profile = [
            {
                id: 1,
                name: "Admin",
            },
            {
                id: 2,
                name: "Manager",
            },
            {
                id: 3,
                name: "Analyst"
            }
        ]

        const profileExists = await profileRepository.findOneBy(profile)
        console.log(profileExists)
        
        if(!profileExists){
            const newProfile = profileRepository.create(profile)
            await profileRepository.save(newProfile)
        }
    }
}
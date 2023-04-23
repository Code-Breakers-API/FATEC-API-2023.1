import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import StatusOrder from "../entities/StatusOrder";

export class StatusSedeer implements Seeder{
    async run(dataSource: DataSource, 
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const statusRepository = dataSource.getRepository(StatusOrder)

        const status = [
            {
                id: 1,
                status: "Aguardando análise",
            },
            {
                id: 2,
                status: "Em análise",
            },
            {
                id: 3,
                status: "Inspeção do produto"
            },
            {
                id: 4,
                status: "Reprovado"
            },
            {
                id: 5,
                status: "Aprovado"
            }
        ]

        const statusExists = await statusRepository.findOneBy(status)
        console.log(statusExists)
        
        if(!statusExists){
            const newStatus = statusRepository.create(status)
            await statusRepository.save(newStatus)
        }
    }
}
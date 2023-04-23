import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import Rules from "../entities/Rules";

export class RuleSedeer implements Seeder{
    async run(dataSource: DataSource, 
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const ruleRepository = dataSource.getRepository(Rules)

        const ruleData = {
            id: 1,
            rules: "Milho da cor verde, prazo maximo de 3 dias de atraso",
        }

        const ruleExists = await ruleRepository.findOneBy({ id: ruleData.id })
        console.log(ruleExists)
        
        if(!ruleExists){
            console.log(ruleData)
            const newRule = ruleRepository.create(ruleData)
            console.log(newRule)
            await ruleRepository.save(newRule)
        }
    }
}
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager, runSeeder } from "typeorm-extension";
import { UserSedeer } from "./UserSeeder";
import { ProfileSedeer } from "./ProfileSeeder";
import { StatusSedeer } from "./StatusSeeder";
import { RuleSedeer } from "./RuleSeeder";
import { ProductSedeer } from "./ProductSeeder";

export class MainSeeder implements Seeder {
    async run(dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        await runSeeder(dataSource, ProfileSedeer)
        await runSeeder(dataSource, UserSedeer)
        await runSeeder(dataSource, StatusSedeer)
        await runSeeder(dataSource, RuleSedeer)
        await runSeeder(dataSource, ProductSedeer)
    }
}
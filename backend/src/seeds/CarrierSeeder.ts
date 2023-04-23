import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import Carrier from "../entities/Carrier";
import Supplier from "../entities/supplier";
import ReportOrder from "../entities/ReportOrder";

export class CarrierSedeer implements Seeder{
    async run(dataSource: DataSource, 
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const carrierRepository = dataSource.getRepository(Carrier)

        const carrierData = {
            id: 1,
            name: "JP-Transports",
            order_register_id: ReportOrder,
            freigth_type: "normal",
            tracking_code: 'V5465454',
            supplier_id: Supplier.name.includes('JA-Alimentos'),
        }

        const carrierExists = await carrierRepository.findOneBy({ name: carrierData.name })
        console.log(carrierExists)
        
        if(!carrierExists){
            console.log(carrierData)
            const newCarrier = carrierRepository.create(carrierData)
            console.log(newCarrier)
            await carrierRepository.save(newCarrier)
        }
    }
}
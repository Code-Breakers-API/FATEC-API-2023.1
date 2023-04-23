import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import ReportOrder from "../entities/ReportOrder";
import StatusOrder from "../entities/StatusOrder";
import Carrier from "../entities/Carrier";
import Supplier from "../entities/supplier";

export class ReportOrderSedeer implements Seeder{
    async run(dataSource: DataSource, 
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const reportOrderRepository = dataSource.getRepository(ReportOrder)

        const reportOrderData = {
            id: 1,
            order_number: 5446651,
            product_description: 'Milho Verde',
            order_date: 12092023,
            product_quantity: 10,
            volume_quantity: 100,
            delivery_date: 15092023,
            freight_types: 'Normal',
            tracking_code: 'V5465454',
            status_id: StatusOrder.name.includes('Aguardando análise'),
            carrier_id: Carrier.name.includes('JP-Transports'),
            supplier_id: Supplier.name.includes('Fulano')
        }

        const reportOrderExists = await reportOrderRepository.findOneBy({ id: reportOrderData.id})
        console.log(reportOrderExists)
        
        if(!reportOrderExists){
            console.log(reportOrderData)
            const newOrder = reportOrderRepository.create(reportOrderData)
            console.log(newOrder)
            await reportOrderRepository.save(newOrder)
        }
    }
}
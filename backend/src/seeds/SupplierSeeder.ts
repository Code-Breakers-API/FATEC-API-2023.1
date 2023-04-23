import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import Supplier from "../entities/supplier";
import Products from "../entities/Products";

export class SupplierSedeer implements Seeder{
    async run(dataSource: DataSource, 
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const supplierRepository = dataSource.getRepository(Supplier)

        const supplierData = {
            id: 1,
            name: "JA-Alimentos",
            cnpj: '1010101/544',
            address: 'Rua Fatec São José - Eugenio de Melo',
            phone: '(12)9658-4595',
            product_id: Products.name.includes('Milho')
        }

        const supplierExists = await supplierRepository.findOneBy({ name: supplierData.name })
        console.log(supplierExists)
        
        if(!supplierExists){
            console.log(supplierData)
            const newSupplier = supplierRepository.create(supplierData)
            console.log(newSupplier)
            await supplierRepository.save(newSupplier)
        }
    }
}
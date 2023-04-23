import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import Products from "../entities/Products";

export class ProductSedeer implements Seeder{
    async run(dataSource: DataSource, 
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const ProductRepository = dataSource.getRepository(Products)

        const productData = {
            id: 1,
            name: "Milho",
            description: 'Milho Verde',
            type: "Grão",
            rule: 1,
            supplier: 1,
        }

        const productExists = await ProductRepository.findOneBy({ name: productData.name })
        console.log(productExists)
        
        if(!productExists){
            console.log(productData)
            const newProduct = ProductRepository.create(productData)
            console.log(newProduct)
            await ProductRepository.save(newProduct)
        }
    }
}
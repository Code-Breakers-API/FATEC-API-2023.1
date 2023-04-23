import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';
import Products from './Products';

@Entity('supplier')
class Supplier{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false })
    name: string

    @Column({type:'varchar', length: 100, nullable: false, unique: true})
    cnpj: string

    @Column({type: 'varchar', length: 100})
    address: string

    @Column({type: 'varchar', length: 100})
    phone: string

    @Column('boolean', {default: true})
    is_active: boolean;

    @OneToMany(() => Products, product => product.name)
    @JoinColumn({name: 'products_id'})
    product: number
}

export default Supplier;
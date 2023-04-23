import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import Rules from './Rules';
import Supplier from './supplier';

@Entity('products')
class Products{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false })
    name: string

    @Column({type:'varchar', length: 100, nullable: false })
    description: string

    @Column({type: 'varchar', length: 100, nullable: false})
    type: string

    @Column('boolean', {default: true})
    is_active: boolean;

    @OneToOne(() => Rules, rule => rule.rules)
    @JoinColumn({name: 'rule_id'})
    rule: number

    @OneToMany(() => Supplier, supplier => supplier.name)
    @JoinColumn({name: 'supplier_id'})
    supplier: number
}

export default Products;
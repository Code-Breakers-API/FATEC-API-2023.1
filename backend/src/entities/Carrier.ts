import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import Supplier from './supplier';
import ReportOrder from './ReportOrder';

@Entity('carrier')
class Carrier{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false })
    name: string

    @OneToMany(() => ReportOrder, order_register => order_register.order_number)
    @JoinColumn({name: 'order_register_id'})
    order_register: number

    @Column({type: 'varchar', length: 100, nullable: false})
    freigth_type: string

    @Column({type: 'varchar', length: 100})
    tracking_code: string

    @OneToOne(() => Supplier)
    @JoinColumn({name: 'supplier_id'})
    supplier: number
}

export default Carrier;
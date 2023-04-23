import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import Carrier from './Carrier';
import Supplier from './supplier';
import StatusOrder from './StatusOrder';

@Entity('report_order')
class ReportOrder{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'int', nullable: false })
    order_number: number

    @Column({type:'varchar', length: 100, nullable: false })
    product_description: string

    @Column({type: 'date', nullable: false})
    order_date: Date

    @Column({type: 'int', nullable: false })
    product_quantity: number

    @Column({type: 'int', default: false})
    volume_quantity: number;

    @Column({type: 'date', nullable: false})
    delivery_date: Date

    @Column({type: 'varchar', length: 100, nullable: false})
    freight_type: string

    @Column({type: 'varchar', length: 100, nullable: false})
    tracking_code: string

    @OneToOne(() => StatusOrder)
    @JoinColumn({name: 'status_id'})
    status: StatusOrder

    @OneToOne(() => Carrier)
    @JoinColumn({name: 'carrier_id'})
    carrier: Carrier

    @OneToOne(() => Supplier)
    @JoinColumn({name: 'supplier_id'})
    supplier: Supplier
}

export default ReportOrder;
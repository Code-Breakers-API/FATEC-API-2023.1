import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('status_order')
class StatusOrder{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    status: string
}

export default StatusOrder;
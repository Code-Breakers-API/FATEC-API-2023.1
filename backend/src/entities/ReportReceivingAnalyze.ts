import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ReportOrder from "./ReportOrder";
import User from "./User";
import StatusOrder from "./StatusOrder";

@Entity('report_receiving_analyze')
class ReportReceivingAnalyze{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToOne(() => ReportOrder, report_order => report_order.order_number)
    @JoinColumn({name: 'report_order_id'})
    report_order: number

    @OneToMany(() => User, users => users.name)
    @JoinColumn({name: 'user_id'})
    users: number

    @Column({type: 'date', nullable: false})
    date: Date

    @OneToOne(() => StatusOrder, status => status.status)
    status: StatusOrder
}

export default ReportReceivingAnalyze;
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import ReportOrder from "./ReportOrder";
import User from "./User";
import StatusOrder from "./StatusOrder";
import ReportReceivingAnalyze from "./ReportReceivingAnalyze";

@Entity('technical_report')
class TechnicalReport{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToOne(() => ReportReceivingAnalyze, report_analyze => report_analyze.id)
    @JoinColumn({name: 'report_analyze_id'})
    report_analyze: number

    @OneToMany(() => User, users => users.name)
    @JoinColumn({name: 'user_id'})
    users: number

    @Column({type: 'date', nullable: false})
    date: Date

    @OneToOne(() => StatusOrder, status => status.status)
    status: StatusOrder
}

export default TechnicalReport;
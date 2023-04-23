import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, Column } from 'typeorm';
import Products from './Products';

@Entity('rules')
class Rules{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 300, nullable: false})
    rules: string
}

export default Rules;
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { ProfileUsers } from './ProfileUsers';

@Entity('users')
class User{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false })
    name: string

    @Column({type:'varchar', length: 100, nullable: false, unique: true })
    cpf: string

    @Column({type: 'varchar', length: 100, nullable: false, unique: true})
    email: string

    @Column({type: 'varchar', length: 100, nullable: false })
    password: string

    @Column('boolean', {default: true})
    is_active: boolean;

    @OneToOne(() => ProfileUsers, profile => profile.id, {nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: ProfileUsers
}

export default User;
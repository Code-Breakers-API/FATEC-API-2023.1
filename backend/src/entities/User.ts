import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Profile } from './ProfileUsers';

@Entity('users')
class User{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false })
    name: string

    @Column({type:'varchar', length: 100, nullable: false })
    cpf: string

    @Column({type: 'int', nullable: false })
    register: string

    @Column({type: 'varchar', length: 100, nullable: false })
    password_user: string

    @Column({type: 'bool', nullable: false })
    active: boolean

    @ManyToOne(() => Profile, profile => profile.users)
    @JoinColumn({name: 'profile_id'})
    profile: Profile
}

export default User;
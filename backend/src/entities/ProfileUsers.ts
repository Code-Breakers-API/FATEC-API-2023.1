import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity('profile_user')
export class ProfileUsers{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    name: string;
}
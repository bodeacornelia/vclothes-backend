import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { Appointment, Role } from './';


@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @OneToMany(type => Appointment, appointment => appointment.user)
    appointments: Appointment[];

    @ManyToOne(type => Role, role => role.users)
    role: Role;

}

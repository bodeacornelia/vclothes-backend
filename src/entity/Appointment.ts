import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from 'typeorm';
import { Category, User, Status } from './';

@Entity()
export class Appointment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "date" })
    appointment: string;

    @Column()
    hour: string;

    @Column()
    details: string;

    @ManyToOne(type => Category, category => category.photos)
    category: Category;

    @ManyToOne(type => User, user => user.appointments)
    user: User;

    @ManyToOne(type => Status, status => status.appointments)
    status: Status;
}
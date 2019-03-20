import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import Category from "./Category";
import User from "./User";
import Status from "./Status";

@Entity()
export default class Appointment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "date" })
    appointment: string;

    @Column()
    hour: string;

    @ManyToOne(type => Category, category => category.photos)
    category: Category;

    @ManyToOne(type => User, user => user.appointments)
    user: User;

    @ManyToOne(type => Status, status => status.appointments)
    status: Status;
}

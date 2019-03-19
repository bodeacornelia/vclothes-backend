import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import Category from "./Category";
import Users from "./Users";
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

    @ManyToOne(type => Users, user => user.appointments)
    user: Users;

    @ManyToOne(type => Status, status => status.appointments)
    status: Status;
}

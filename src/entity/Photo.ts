import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import Category from "./Category";
import Gender from "./Gender";

@Entity()
export default class Photo extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ type: "date" })
    createdAt: string;

    @Column()
    photo_path: string;

    @ManyToOne(type => Category, category => category.photos)
    category: Category;

    @ManyToOne(type => Gender, gender => gender.photos)
    gender: Gender;
}

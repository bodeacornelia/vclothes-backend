import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class Gender extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: string;

  @OneToMany(type => Photo, photo => photo.gender)
  photos: Photo[];
}

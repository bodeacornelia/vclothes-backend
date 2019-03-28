import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Photo } from './';

@Entity()
export class Category extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @OneToMany(type => Photo, photo => photo.category)
  photos: Photo[];
}

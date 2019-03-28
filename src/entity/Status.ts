import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Appointment } from './Appointment';

@Entity()
export class Status extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @OneToMany(type => Appointment, appointment => appointment.status)
  appointments: Appointment[];
}

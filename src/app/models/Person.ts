import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Adress from './Adress';

@Entity('person')
class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  bith_date: Date;

  @ManyToMany(() => Adress)
  @JoinTable()
  adress: Adress[];

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}

export default Person;

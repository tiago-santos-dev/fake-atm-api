import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
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
  birth_date: Date;

  @OneToMany(() => Adress, adress => adress.person)
  adress: Adress[];

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}

export default Person;

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import Person from './Person';

@Entity('adress')
class Adress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip_code: string;

  @ManyToOne(() => Person, person => person.adress)
  person: Person;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}

export default Adress;

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import bcrypt from 'bcryptjs';
import Role from './Role';
import Person from './Person';

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Person, { eager: true })
  @JoinColumn()
  person_info: Person;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToMany(() => Role, { eager: true })
  @JoinTable()
  roles: Role[];

  @BeforeInsert()
  @BeforeUpdate()
  hasPassword(): void {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}

export default User;

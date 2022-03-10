import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import bcrypt from 'bcryptjs';
import Role from './Role';

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToMany(() => Role)
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

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
} from 'typeorm';
import bcrypt from 'bcryptjs';

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

  @BeforeInsert()
  @BeforeUpdate()
  hasPassword(): void {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}

export default User;

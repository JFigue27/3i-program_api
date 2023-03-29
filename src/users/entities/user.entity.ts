import { Exclude } from 'class-transformer';
import { Enhancement } from 'src/enhancements/entities/enhancement.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name', type: 'varchar', length: 100, default: 'null' })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 100, default: 'null' })
  lastName: string;

  @Column({ name: 'clock_id', type: 'varchar', length: 100, default: null })
  clockId: string;

  @Column({ name: 'display_name', type: 'varchar', length: 250, default: null })
  displayName: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ name: 'user_name', type: 'varchar', length: 100, unique: true })
  userName: string;

  @Exclude()
  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 100 })
  role: string;

  @Column({ name: 'is_enabled', type: 'boolean', default: true })
  isEnabled: boolean;

  @Column({ type: 'varchar', length: 100, default: null })
  shift: string;

  @Column({ type: 'varchar', length: 100, default: null })
  area: string;

  @Column({ type: 'varchar', length: 100, default: null })
  supervisor: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => Enhancement, (enhancement) => enhancement.user)
  enhancement: Enhancement;
}

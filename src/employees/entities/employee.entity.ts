import { Enhancement } from 'src/enhancements/entities/enhancement.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'employees' })
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'clock_id', type: 'varchar', length: 100, default: null })
  clockId: string;

  @Column({ name: 'display_name', type: 'varchar', length: 250, default: null })
  displayName: string;

  @Column({ type: 'varchar', length: 100, default: null })
  shift: string;

  @Column({ type: 'varchar', length: 100, default: null })
  area: string;

  @Column({ type: 'varchar', length: 100, default: null })
  supervisor: string;

  @OneToMany(() => Enhancement, (enhancement) => enhancement.employee)
  enhancement: Enhancement;
}

import { Employee } from 'src/employees/entities/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'enhancements' })
export class Enhancement {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar', length: 255, default: null })
  title: string;

  @Column({
    name: 'category_description',
    type: 'varchar',
    length: 255,
    default: null,
  })
  categoryDescription: string;

  @Column({
    name: 'is_enterprise_saving',
    type: 'boolean',
    default: false,
  })
  isEnterpriseSaving: boolean;

  @Column({
    name: 'needs_move_objects',
    type: 'boolean',
    default: false,
  })
  needsMoveObjects: boolean;

  @Column({
    name: 'needs_edit_or_create_report',
    type: 'boolean',
    default: false,
  })
  needsEditOrCreateReport: boolean;

  @Column({
    name: 'needs_edit_or_create_document',
    type: 'boolean',
    default: false,
  })
  needsEditOrCreateDocument: boolean;

  @Column({
    name: 'needs_to_paint_or_work_on_an_area_layout',
    type: 'boolean',
    default: false,
  })
  needsToPaintOrWorkOnAnAreaLayout: boolean;

  @Column({
    name: 'needs_equipment_indentification',
    type: 'boolean',
    default: false,
  })
  needsEquipmentIndentification: boolean;

  @Column({
    name: 'is_standardizable',
    type: 'boolean',
    default: false,
  })
  isStandardizable: boolean;

  @Column({ type: 'varchar', length: 255, default: null })
  other: string;

  @Column({
    name: 'current_situation',
    type: 'varchar',
    length: 255,
    default: null,
  })
  currentSituation: string;

  @Column({
    name: 'enhancement_description',
    type: 'varchar',
    length: 255,
    default: null,
  })
  enhancementDescription: string;

  @Column({
    name: 'enhancement_expectation',
    type: 'varchar',
    length: 255,
    default: null,
  })
  enhancementExpectation: string;

  @ManyToOne(() => Employee, (employee) => employee.enhancement)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee[];
}

import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { nanoid } = require('nanoid');

@Entity('developers')
export class Developer {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: Date;

  @BeforeInsert()
  generateId() {
    this.id = `dev_${nanoid()}`;
  }
}

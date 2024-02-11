import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email', unique: true, length: 20, nullable: false })
  email: string;

  @Column({ name: 'password', length: 30, nullable: false })
  password: string;

  @Column({ name: 'firstName', length: 30, nullable: true })
  firstName: string;

  @Column({ name: 'lastName', length: 30, nullable: true })
  lastName: string;

  @Column({ name: 'phoneNumber', length: 15, nullable: true })
  phoneNumber: string;

  @Column({name: 'shirtSize', length: 5, nullable: true})
  shirtSize: string;

  @Column({name: 'preferredTechnology', length: 30, nullable: true})
  preferredTechnology: string;
}

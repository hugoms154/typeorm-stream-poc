import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}

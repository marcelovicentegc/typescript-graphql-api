import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("animal")
export class Animal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  species: string;

  @Column({ nullable: true })
  favoriteFood: string;
}

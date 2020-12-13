import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("animal")
export class Animal extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id!: string;

  @Column({ nullable: true })
  public species!: string;

  @Column({ nullable: true })
  public favoriteFood!: string;
}

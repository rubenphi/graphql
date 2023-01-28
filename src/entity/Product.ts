import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @Column("varchar")
  name!: string;
  @Column("int",{default: 0})
  quantity!: number;
  @CreateDateColumn({type:"timestamp"})
  createdAt!: string;
}

import { Entity, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { Producto } from './producto.entity';

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ primary: true })
  identificacion: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  empresa: string;

  @ManyToMany(() => Producto, producto => producto.proveedor)
  productos: Producto[];
}

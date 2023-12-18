  import { Entity, Column, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
  import { Categoria } from './categoria.entity';
  import { Proveedor } from './proveedor.entity';

  @Entity()
  export class Producto {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    nombre: string;
  
    @Column()
    descripcion: string;
  
    @Column()
    precio: number;
  
    @Column()
    stock: number;
  
    @Column()
    images: string;
  
    @ManyToOne(() => Categoria, categoria => categoria.productos)
    categoria: Categoria;
  
    @ManyToMany(() => Proveedor, proveedor => proveedor.productos)
    @JoinTable()
    proveedor: Proveedor[]; 
  }
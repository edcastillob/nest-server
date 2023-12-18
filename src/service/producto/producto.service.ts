import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/entity/producto.entity';
import { IProducto } from 'src/models/producto.interface';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<IProducto>,
  ) {}

  async findAll(): Promise<IProducto[]> {
    return this.productoRepository.find();
  }

  async findOne(nombre: string): Promise<IProducto> {
    const opcionesBusqueda: FindOneOptions<IProducto> = {
      where: { nombre: nombre },
    };
    return this.productoRepository.findOne(opcionesBusqueda);
  }
  async create(productoData: IProducto): Promise<IProducto> {
    console.log('2____');
    const producto = this.productoRepository.create(productoData);
    return this.productoRepository.save(producto);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedor } from 'src/entity/proveedor.entity';
import { IProveedor } from 'src/models/proveedor.interface';
import { FindManyOptions, ILike, Repository } from 'typeorm';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private proveedorRepository: Repository<IProveedor>,
  ) {}

  async findAll(): Promise<IProveedor[]> {
    return this.proveedorRepository.find();
  }

  async findOne(nombres: string): Promise<IProveedor[]> {
    const opcionesBusqueda: FindManyOptions<IProveedor> = {
      where: { nombres: ILike(`%${nombres}%`) },
    };
    return this.proveedorRepository.find(opcionesBusqueda);
  }
  
  async create(proveedor: IProveedor): Promise<IProveedor> {
    return this.proveedorRepository.save(proveedor);
  }
}

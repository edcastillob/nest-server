import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from 'src/entity/categoria.entity';
import { ICategoria } from 'src/models/categoria.interface';
import { FindOneOptions, ILike, Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<ICategoria>,
  ) {}

  async findAll(): Promise<ICategoria[]> {
    return this.categoriaRepository.find();
  }

  async findOne(nombre: string): Promise<ICategoria> {
    const opcionesBusqueda: FindOneOptions<ICategoria> = {
      where: { nombre: ILike(`%${nombre}%`) },
    };
    return this.categoriaRepository.findOne(opcionesBusqueda);
  }
  
  async create(categoria: ICategoria): Promise<ICategoria> {
    return this.categoriaRepository.save(categoria);
  }
}
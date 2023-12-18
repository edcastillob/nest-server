
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ICategoria } from 'src/models/categoria.interface';
import { CategoriaService } from 'src/service/categoria/categoria.service';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly _categoriaService: CategoriaService) {}

  @Get()
  findAll(): Promise<ICategoria[]> {
    return this._categoriaService.findAll();
  }

  @Get(':nombre')
  findOne(@Param('nombre') nombre: string): Promise<ICategoria> {
    return this._categoriaService.findOne(nombre);
  }

  @Post()
  create(@Body() categoria: ICategoria): Promise<ICategoria> {
    return this._categoriaService.create(categoria);
  }
}

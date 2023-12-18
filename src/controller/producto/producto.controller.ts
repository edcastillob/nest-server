
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { IProducto } from 'src/models/producto.interface';
import { ProductoService } from 'src/service/producto/producto.service';

@Controller('productos')
export class ProductoController {
  constructor(private readonly _productoService: ProductoService) {}

  @Get()
  findAll(): Promise<IProducto[]> {
    return this._productoService.findAll();
  }

  @Get(':nombre')
  findOne(@Param('nombre') nombre: string): Promise<IProducto> {
    return this._productoService.findOne(nombre);
  }

  @Post()
  async create(@Body() productoData: IProducto): Promise<IProducto> {
    console.log('first');
    return this._productoService.create(productoData);
  }
  
}

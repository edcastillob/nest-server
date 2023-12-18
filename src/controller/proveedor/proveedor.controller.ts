
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { IProveedor } from 'src/models/proveedor.interface';
import { ProveedorService } from 'src/service/proveedor/proveedor.service';

@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly _proveedorService: ProveedorService) {}

  @Get()
  findAll(): Promise<IProveedor[]> {
    return this._proveedorService.findAll();
  }

  @Get(':nombres')
  findOne(@Param('nombres') nombres: string): Promise<IProveedor[]> {
    return this._proveedorService.findOne(nombres);
  }

  @Post()
  create(@Body() proveedor: IProveedor): Promise<IProveedor> {
    return this._proveedorService.create(proveedor);
  }
}

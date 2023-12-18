import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entity/producto.entity';
import { Categoria } from './entity/categoria.entity';
import { Proveedor } from './entity/proveedor.entity';
import { ProductoService } from './service/producto/producto.service';
import { CategoriaService } from './service/categoria/categoria.service';
import { ProveedorService } from './service/proveedor/proveedor.service';
import { ProductoController } from './controller/producto/producto.controller';
import { CategoriaController } from './controller/categoria/categoria.controller';
import { ProveedorController } from './controller/proveedor/proveedor.controller';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username: 'postgres',
      password: 'root',
      database: 'nestbackend',
      entities: [Producto, Categoria, Proveedor],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Producto, Categoria, Proveedor])
  ],
  controllers: [AppController, ProductoController, CategoriaController, ProveedorController],
  providers: [AppService, ProductoService, CategoriaService, ProveedorService],
})
export class AppModule {}

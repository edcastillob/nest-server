import { Categoria } from "src/entity/categoria.entity";
import { Proveedor } from "src/entity/proveedor.entity";


// export interface IProducto {
//     nombre: string;
//     descripcion: string;
//     precio: number;
//     stock: number;
//     images: string;
//     categoria: Categoria;
//     proveedores: Proveedor[];
// }

export interface IProducto {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    images: string;
    categoria: Categoria;
    proveedor: Proveedor[];
  }
  
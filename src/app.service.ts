import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bienvenidos al Backend para productos, prueba Nest + Angular';
  }
}

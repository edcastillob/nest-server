import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT: number = 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:'*',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true
  }); 
  await app.listen(PORT);
  console.log(`🌎 Servidor conectado a puerto: ⚡ ${PORT}...`)
}
bootstrap();

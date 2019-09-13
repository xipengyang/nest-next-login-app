import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Next from 'next';
import { RenderModule } from 'nest-next';
async function bootstrap() {
  const app = Next({ dev: process.env.NODE_ENV !== 'produciton' });
  await app.prepare();

  const server = await NestFactory.create(AppModule);
  const renderer = server.get(RenderModule);
  renderer.register(server, app);
  await server.listen(3000);
}
bootstrap();

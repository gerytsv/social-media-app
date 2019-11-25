import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SystemErrorFilter } from './common/filters/system-error.filter';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.useGlobalFilters(new SystemErrorFilter());
  await app.listen(3000);
}
bootstrap();

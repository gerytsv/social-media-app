import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SystemErrorFilter } from './common/filters/system-error.filter';
import helmet from 'helmet';
import bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors();
  app.use(helmet());
  app.useGlobalFilters(new SystemErrorFilter());
  await app.listen(3000);
}
bootstrap();

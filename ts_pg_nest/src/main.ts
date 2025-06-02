import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import ormconfig from '../ormconfig';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Book Review API')
    .setDescription('Book Api')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 


  await app.listen(ormconfig.main || 3000);
  console.log(`Server is running on http://localhost:${ormconfig.main || 3000}`);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './infrastructure/common/filters/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        // Validation so that props in the body unrecognized by the DTO throw an error
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            forbidUnknownValues: true
        })
    );
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(5454);
}
bootstrap();

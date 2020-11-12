import { ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getConnectionConfig } from 'config/connection';
import { createConnection } from 'typeorm';
import { AppModule } from './gateway/app.module';

async function bootstrap() {
    ConfigModule.forRoot();

    const connection = await createConnection(getConnectionConfig());
    const app = await NestFactory.create(AppModule.forRoot(connection));
    const options = new DocumentBuilder()
        .setTitle('VHS backend api')
        .setVersion(process.env.npm_package_version || '')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api/v1/docs', app, document);

    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    await app.listen(process.env.PORT || 3000);
}
bootstrap();

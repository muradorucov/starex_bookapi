import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './books/book.module';
import { ReviewModule } from './reviews/review.module';
import ormconfig from '../ormconfig';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: ormconfig.host,
            port: ormconfig.port,
            username: ormconfig.username,
            password: ormconfig.password,
            database: ormconfig.database,
            autoLoadEntities: true,
            synchronize: ormconfig.synchronize,
            ssl: ormconfig.ssl,
        }),
        BookModule,
        ReviewModule,
    ],
})
export class AppModule { }

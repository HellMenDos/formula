import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mode } from './types/mode';

@Module({
    imports: [],
})
export class DatabaseModule {
    static forRoot(mode: Mode): DynamicModule {
        
        let configs = (mode == Mode.development) ?
            {
                type: process.env.TYPEORM_CONNECTION,
                host: process.env.TYPEORM_HOST,
                port: process.env.TYPEORM_PORT,
                username: process.env.TYPEORM_USERNAME,
                password: process.env.TYPEORM_PASSWORD,
                database: process.env.TYPEORM_DATABASE,
                synchronize: process.env.TYPEORM_SYNCHRONIZE,
                logging: process.env.TYPEORM_ENTITIES,
                entities: [process.env.TYPEORM_ENTITIES],
                migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
                migrations: [process.env.TYPEORM_MIGRATIONS],
                cli: {
                migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
                },
            } : {}

        return {
            module: DatabaseModule,
            imports: [
                TypeOrmModule.forRoot(configs)
            ]
        }
    }
}

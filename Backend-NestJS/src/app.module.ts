import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';  // Import your user module
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',  // or your MySQL host
      port: 3306,
      username: 'root',  // your MySQL username
      password: 'password',  // your MySQL password
      database: 'nestjs_db',  // your database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Include all entities in the project
      synchronize: true,  // Auto-create tables (disable in production!)
    }),
    UserModule,  // Import your user module here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
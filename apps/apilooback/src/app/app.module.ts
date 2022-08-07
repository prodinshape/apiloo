import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from '@adminjs/nestjs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Database, Resource } from 'admin-bro-typeorm';
import AdminJS from 'adminjs';

import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Request } from './request/entities/request.entity';
import { AuthModule } from './auth/auth.module';
import { Collection } from './collection/entities/collection.entity';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

const entities = [User, Request, Collection];
const adminJs: any = {
  Database, Resource
}

AdminJS.registerAdapter(adminJs);

console.log(process.env);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot(
      configuration(entities)
    ),
    AdminModule.createAdmin({
      adminJsOptions: {
        rootPath: '/admin',
        resources: entities,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

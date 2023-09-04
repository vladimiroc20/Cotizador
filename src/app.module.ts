import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ItemsModule, UsersModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
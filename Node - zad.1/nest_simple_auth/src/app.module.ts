import { Module, SetMetadata } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, TypeOrmModule.forRoot(
    {
      type:'sqlite',
      database: 'db/userdb.db',
      synchronize: true,
      entities:[User]
    }
  ), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
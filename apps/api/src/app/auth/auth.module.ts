import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { EmployeesModule } from '../employees/employees.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    EmployeesModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    }),
  ],
  controllers: [
    AuthController,],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
})
export class AuthModule { }

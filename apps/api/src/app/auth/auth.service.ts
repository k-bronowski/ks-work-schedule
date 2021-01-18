import { AuthData, User } from '@ks-work-schedule/models';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employees/entities/employee.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthData)
    private authRepository: Repository<AuthData>,
    private userService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, pass: string) {
    const authData = await this.authRepository.findOne(username);
    if (authData && authData.password === pass) {
      return this.userService.findOne(username);
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username };
    return { access_token: this.jwtService.sign(payload) }
  }
}

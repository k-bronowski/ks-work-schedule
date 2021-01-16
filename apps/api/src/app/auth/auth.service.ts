import { Injectable } from '@nestjs/common';
import { EmployeesService } from '../employees/employees.service';
import { JwtService } from '@nestjs/jwt';
import { Employee } from '../employees/entities/employee.entity';

@Injectable()
export class AuthService {
  constructor(
    private employeeService: EmployeesService,
    private jwtService: JwtService,
  ) { }

  async validateUser(login: string, pass: string) {
    const user = await this.employeeService.findOneByLogin(login);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Employee) {
    const payload = { username: user.login, sub: user.id };
    return { access_token: this.jwtService.sign(payload) }
  }
}

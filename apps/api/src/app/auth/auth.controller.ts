import { AuthData } from '@ks-work-schedule/models';
import { Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard, Public } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-aut.guard';

export class LoginData {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

}

@ApiTags('auth')
@Controller()
export class AuthController {
  ice: AuthService
  constructor(private authSevice: AuthService, private userService: UsersService) { }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: AuthData })
  async login(@Request() req) {
    return this.authSevice.login(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return this.userService.findOne(req.user.username);
  }
}

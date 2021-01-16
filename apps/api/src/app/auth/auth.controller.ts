import { Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
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
  constructor(private authSevice: AuthService) { }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: LoginData })
  async login(@Request() req) {
    return this.authSevice.login(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

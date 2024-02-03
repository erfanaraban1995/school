import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() signInDto: Record<string, any>) {
    return this.authService.login(signInDto.nationalId, signInDto.password);
  }
}

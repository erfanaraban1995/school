import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async login(username: string, password: string) {
    const user = await this.usersService.findByNationalId(username);
    if (user && user.password === password) {
      const payload = {
        userId: user.id,
        username: user.nationalId,
      };
      return {
        ...payload,
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}

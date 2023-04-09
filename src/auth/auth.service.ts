import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(userId: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(userId);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const { password: _pass, ...result } = user;
    console.log(result);
    return result;
  }
}

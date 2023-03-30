import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { PayloadToken } from '../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string) {
    const user = await this.usersService.findByUsername(userName);

    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      return user;
    }
    return null;
  }

  generateJWT(user: User) {
    // console.log(user);

    const payload: PayloadToken = {
      role: user.role?.toLowerCase(),
      sub: user.id,
    };
    // console.log(payload);

    delete user.password;

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}

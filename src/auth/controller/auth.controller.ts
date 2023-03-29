import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../users/entities/user.entity';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    // const user = req.user as User;
    const { user } = req.body;
    // console.log(req);

    return this.authService.generateJWT(user);
  }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<any> {
    const user = await this.userService.findOneByEmail(signInDto.email);
    const result = await bcrypt.compare(signInDto.password, user.password);

    if (result) {
      const payload = { sub: user.id, username: user.email };
      const accessToken = await this.jwtService.signAsync(payload);
      return { access_token: accessToken };
    } else {
      return {
        message: 'Invalid credentials',
      };
    }
  }

  async register(registerDto: RegisterDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(registerDto.password, saltOrRounds);
    registerDto.password = hash;

    const userToRegister = await this.userService.create(registerDto);

    return;
  }
}

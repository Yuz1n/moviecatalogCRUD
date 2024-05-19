// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async register(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.usersService.create(createUserDto);
    return { message: 'User registered successfully', user };
  }

  async login(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.usersService.findByUsername(loginUserDto.username);
    if (user && user.password === loginUserDto.password) {
      return { token: this.jwtService.sign({ userId: user.id }) };
    }
    throw new Error('Invalid credentials');
  }
}

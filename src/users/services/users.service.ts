import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { FilterUsersDto } from '../dto/filter-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  // create user
  async create(createUser: CreateUserDto) {
    const newUser = await this.userRepo.create(createUser);

    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;

    return this.userRepo.save(newUser);
  }

  async findAll(params: FilterUsersDto) {
    const { limit, page, activeUsers, debounceValue } = params;

    const user = await this.userRepo.findAndCount({
      // where: [
      //   // { isEnabled: activeUsers },
      //   { isEnabled: activeUsers, userName: Like(`%${debounceValue}%`) },
      //   { isEnabled: activeUsers, email: Like(`%${debounceValue}%`) },
      //   { isEnabled: activeUsers, company: Like(`%${debounceValue}%`) },
      //   { isEnabled: activeUsers, firstName: Like(`%${debounceValue}%`) },
      //   { isEnabled: activeUsers, lastName: Like(`%${debounceValue}%`) },
      // ],
      order: {
        createdAt: 'DESC',
      },
      take: limit || 0,
      skip: (page - 1) * limit,
    });

    if (!user) {
      throw new NotFoundException(`Users not found.`);
    }
    return user;
  }

  async findOne(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User not Found - id:${id}`);
    }
    return user;
  }

  findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  async findByUsername(userName: string) {
    return this.userRepo.findOne({
      where: { userName },
    });
  }

  async update(id: string, updateUser: UpdateUserDto) {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User id: ${id} not found.`);
    }

    await this.userRepo.merge(user, updateUser);

    if (updateUser.password) {
      const hashPassword = await bcrypt.hash(updateUser.password, 10);
      user.password = hashPassword;
    }

    return this.userRepo.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepo.delete(id);
    if (!user) {
      throw new NotFoundException(`User id: ${id} not found.`);
    }
    return user;
  }
}

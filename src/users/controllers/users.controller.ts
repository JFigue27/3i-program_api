import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Put,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/roles.model';
import { Public } from 'src/auth/decorators/public.decorator';
import { FilterUsersDto } from '../dto/filter-user.dto';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }

  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createUser: CreateUserDto) {
    return this.usersService.create(createUser).catch((e) => {
      console.log('Aqui', e.detail);
      switch (true) {
        case e.detail.includes('user_name') &&
          e.detail.includes('already exists'):
          throw 'username already exists';

        default:
          break;
      }
    });
  }

  // @Public()
  @Roles(Role.ADMIN)
  @Get()
  findAll(@Query() params: FilterUsersDto) {
    return this.usersService.findAll(params);
  }

  @Roles(Role.ADMIN, Role.EMPLOYEE)
  @Get('username/:id')
  findByUsername(@Param('id') id: string) {
    return this.usersService.findByUsername(id);
  }

  @Roles(Role.ADMIN, Role.EMPLOYEE)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Roles(Role.ADMIN, Role.EMPLOYEE)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Public()
  // @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}

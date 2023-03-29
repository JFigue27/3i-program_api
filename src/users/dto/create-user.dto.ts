import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly userName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly role: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly isEnabled: boolean;

  @IsPositive()
  @IsOptional()
  @ApiProperty()
  readonly enhancementId: number;
}

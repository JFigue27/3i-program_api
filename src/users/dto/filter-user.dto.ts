import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class FilterUsersDto {
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  limit: number;

  @IsOptional()
  @ApiProperty()
  @Min(0)
  page: number;

  @IsOptional()
  @ApiProperty()
  activeUsers: any;

  @IsString()
  @IsOptional()
  @ApiProperty()
  debounceValue: any;
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnhancementsService } from '../services/enhancements.service';
import { CreateEnhancementDto } from '../dto/create-enhancement.dto';
import { UpdateEnhancementDto } from '../dto/update-enhancement.dto';

@Controller('enhancements')
export class EnhancementsController {
  constructor(private readonly enhancementsService: EnhancementsService) {}

  @Post()
  create(@Body() createEnhancementDto: CreateEnhancementDto) {
    return this.enhancementsService.create(createEnhancementDto);
  }

  @Get()
  findAll() {
    return this.enhancementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enhancementsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnhancementDto: UpdateEnhancementDto,
  ) {
    return this.enhancementsService.update(+id, updateEnhancementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enhancementsService.remove(+id);
  }
}

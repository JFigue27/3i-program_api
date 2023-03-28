import { Injectable } from '@nestjs/common';
import { CreateEnhancementDto } from '../dto/create-enhancement.dto';
import { UpdateEnhancementDto } from '../dto/update-enhancement.dto';

@Injectable()
export class EnhancementsService {
  create(createEnhancementDto: CreateEnhancementDto) {
    return 'This action adds a new enhancement';
  }

  findAll() {
    return `This action returns all enhancements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enhancement`;
  }

  update(id: number, updateEnhancementDto: UpdateEnhancementDto) {
    return `This action updates a #${id} enhancement`;
  }

  remove(id: number) {
    return `This action removes a #${id} enhancement`;
  }
}

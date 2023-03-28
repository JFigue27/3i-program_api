import { Test, TestingModule } from '@nestjs/testing';
import { EnhancementsController } from './enhancements.controller';
import { EnhancementsService } from '../services/enhancements.service';

describe('EnhancementsController', () => {
  let controller: EnhancementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnhancementsController],
      providers: [EnhancementsService],
    }).compile();

    controller = module.get<EnhancementsController>(EnhancementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

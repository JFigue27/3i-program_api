import { Test, TestingModule } from '@nestjs/testing';
import { EnhancementsService } from './enhancements.service';

describe('EnhancementsService', () => {
  let service: EnhancementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnhancementsService],
    }).compile();

    service = module.get<EnhancementsService>(EnhancementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

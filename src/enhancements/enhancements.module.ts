import { Module } from '@nestjs/common';
import { EnhancementsService } from './services/enhancements.service';
import { EnhancementsController } from './controllers/enhancements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enhancement } from './entities/enhancement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enhancement])],
  controllers: [EnhancementsController],
  providers: [EnhancementsService],
})
export class EnhancementsModule {}

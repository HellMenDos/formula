import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Formula } from '~src/entity/Formula.entity';
import { FormulaService } from '~src/services/formula.service';
import { FormulaController } from './formula.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Formula])
  ],
  controllers: [FormulaController],
  providers: [FormulaService],
  exports: [FormulaService]
})
export class FormulaModule {}

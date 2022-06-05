import { Module } from '@nestjs/common';
import { DatabaseModule } from '~src/database.module';
import { Mode } from '~src/types/mode';

import { FormulaModule } from './modules/formula/formula.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    DatabaseModule.forRoot(Mode.development),
    UserModule,
    FormulaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

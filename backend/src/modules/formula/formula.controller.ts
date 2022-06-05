import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { FormulaService } from '~src/services/formula.service';
import { FormulaUpdateDTO } from '~src/types/dto/Formula.dto';
import { FormulaDTO } from '~src/types/dto/Formula.dto';

@Controller('/api/users')
export class FormulaController {
  constructor(private FormulaService: FormulaService) {}

  @Get() 
  async getAll() {
    return this.FormulaService.getAll()
  }

  @Get(':id') 
  async getOne(@Param() id: string) {
    return this.FormulaService.findOne(id)
  }

  @Post()
  async create(@Body() data: FormulaDTO) {
    return this.FormulaService.create(data)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBody: FormulaUpdateDTO) {
    return await this.FormulaService.update(id, updateBody)
  }
}

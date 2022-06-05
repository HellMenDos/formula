import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Formula } from "~src/entity/Formula.entity";
import { FormulaDTO, FormulaUpdateDTO } from '~src/types/dto/Formula.dto';


@Injectable()
export class FormulaService {
    constructor(
        @InjectRepository(Formula) 
        private FormulaReposetory: Repository<Formula>
    ) {}
    
    create(data: FormulaDTO): Promise<FormulaDTO> {
        return this.FormulaReposetory.save(data)
    }

    findOne(id: string): Promise<FormulaDTO> {
        return this.FormulaReposetory.findOne(id);
    }

    getAll() {
        return this.FormulaReposetory.find()
    }

    update(id:string, data: FormulaUpdateDTO) {
        return this.FormulaReposetory.update(id, { ...data })
    }

}
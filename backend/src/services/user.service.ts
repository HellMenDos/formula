import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from '~src/entity/User.entity';

import { UserDTO } from '~src/types/dto/User.dto';
import { UserUpdateDto } from '../types/dto/User.dto';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private UserReposetory: Repository<User>) {}
    
    create(data: UserDTO): Promise<UserDTO> {
        return this.UserReposetory.save(data)
    }

    findOne(id: string): Promise<UserDTO> {
        return this.UserReposetory.findOne(id);
    }

    update(id:string, data: UserUpdateDto) {
        return this.UserReposetory.update(id, { ...data })
    }

    mathUser(email:string, password:string): Promise<UserDTO[]> {
        return this.UserReposetory.find({ where: { email, password }})
    }

}
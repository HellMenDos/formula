import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '~src/services/user.service';
import { UserDTO } from '~src/types/dto/User.dto';
import { UserLoginDto, UserUpdateDto } from '../../types/dto/User.dto';

@Controller('/api/users')
export class UserController {
  constructor(private UserService: UserService) {}

  @Post('/registration')
  async registration(@Body() user: UserDTO): Promise<UserDTO> {
    return await this.UserService.create(user)
  }

  @Post('/login')
  async login(@Body() {email, password}: UserLoginDto): Promise<UserDTO> {
    return (await this.UserService.mathUser(email, password))[0]
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBody: UserUpdateDto) {
    return await this.UserService.update(id, updateBody)
  }
}

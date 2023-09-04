import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity'


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private usersRepo: Repository <User>
  ){}

  create(body: any) {
    const newUser = this.usersRepo.create(body);
    return this.usersRepo.save(newUser);
  }

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: any) {
    return this.usersRepo.findOne(id);
  }

  async update(id: any, body: any) {
    const user = await this.usersRepo.findOne(id);
    this.usersRepo.merge(user, body)
    return this.usersRepo.save(user);
  }

  async remove(id: number) {
    await this.usersRepo.delete(id)
    return true;
  }
}
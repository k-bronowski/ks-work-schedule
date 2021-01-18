import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '@ks-work-schedule/models'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async create(user: User) {
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(username: string) {
    return this.usersRepository.findOne(username);
  }

  update(username: string, user: User) {
    return this.usersRepository.save(user);
  }

  async remove(username: string) {
    await this.usersRepository.delete(username);
  }
}

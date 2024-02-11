import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userToCreate = await this.userRepository.create(createUserDto);
    return this.userRepository.save(userToCreate);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const matchingRecord = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!matchingRecord) {
      throw new Error('User not found');
    }
    return (matchingRecord);
  }

  async findOneByEmail(email: string): Promise<User> {
    const matchingRecord = await this.userRepository.findOne({
      where: { email: email },
    });
    if (!matchingRecord) {
      throw new Error('User not found');
    }
    return (matchingRecord);
  }
}

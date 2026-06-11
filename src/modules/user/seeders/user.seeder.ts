import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRegistrationStage } from '../entities/user.entity';

@Injectable()
export class UserSeeder {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async seed(): Promise<void> {
    const email = 'suthinzar@obs.com.mm';
    const existing = await this.userRepository.findOne({ where: { email } });
    if (!existing) {
      await this.userRepository.save(
        this.userRepository.create({
          email,
          fullName: 'Suthinzar',
          phone: '095085730',
          registrationStage: UserRegistrationStage.COMPLETED,
          password: 'passwordD123!@#',
        }),
      );
    }
  }
}

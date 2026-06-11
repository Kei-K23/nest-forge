import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/modules/role';
import { Repository } from 'typeorm';
import { Admin } from '../entities/admin.entity';

@Injectable()
export class AdminSeeder {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async seed(): Promise<void> {
    const role = await this.roleRepository.findOne({
      where: { name: 'Super Admin' },
    });

    if (!role) {
      throw new Error('Super Admin role must be seeded before admin seeding');
    }

    const email = 'arkarmin@obs.com.mm';
    const existing = await this.adminRepository.findOne({ where: { email } });
    if (!existing) {
      await this.adminRepository.save(
        this.adminRepository.create({
          email,
          fullName: 'Super Admin',
          roleId: role.id,
          password: 'passwordD123!@#',
        }),
      );
    }
  }
}

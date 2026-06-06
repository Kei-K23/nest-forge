import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { IsPassword } from '../../../common/decorators/is-password.decorator';

export class UserRegisterPasswordSetupDto {
  @IsPassword()
  password!: string;

  @IsPassword('Confirm password')
  confirmPassword!: string;

  @IsString({ message: 'User ID must be a string' })
  @IsUUID('4', { message: 'User ID must be a valid UUID' })
  @IsNotEmpty({ message: 'User ID is required' })
  userId!: string;
}

import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { IsPassword } from '../../../common/decorators/is-password.decorator';

export class ChangePasswordDto {
  @IsString({ message: 'Current password must be a string' })
  @IsNotEmpty({ message: 'Current password is required' })
  @MaxLength(128, {
    message: 'Current password must not exceed 128 characters',
  })
  currentPassword!: string;

  @IsPassword('New password')
  newPassword!: string;
}

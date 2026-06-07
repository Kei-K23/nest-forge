import { IsNotEmpty, IsString } from 'class-validator';
import { IsPassword } from '../../../common/validators/is-password.validator';

export class ResetPasswordDto {
  @IsString({ message: 'Access Token must be a string' })
  @IsNotEmpty({ message: 'Access Token is required' })
  accessToken!: string;

  @IsPassword('New password')
  newPassword!: string;
}

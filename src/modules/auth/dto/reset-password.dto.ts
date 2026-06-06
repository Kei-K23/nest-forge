import { IsNotEmpty, IsString } from 'class-validator';
import { IsPassword } from '../../../common/decorators/is-password.decorator';

export class ResetPasswordDto {
  @IsString({ message: 'Access Token must be a string' })
  @IsNotEmpty({ message: 'Access Token is required' })
  accessToken!: string;

  @IsPassword('New password')
  newPassword!: string;
}

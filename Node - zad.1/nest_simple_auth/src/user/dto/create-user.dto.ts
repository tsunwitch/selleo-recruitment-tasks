import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Length(5, 50)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 20)
  @IsStrongPassword()
  password: string;

  @IsOptional()
  @IsString()
  @Length(2, 20)
  firstName?: string;

  @IsOptional()
  @IsString()
  @Length(2, 20)
  lastName?: string;

  @IsOptional()
  @IsString()
  @IsPhoneNumber('PL')
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  @Length(1,5)
  shirtSize?: string;
  
  @IsOptional()
  @IsString()
  @Length(2, 30)
  preferredTechnology?: string;
}

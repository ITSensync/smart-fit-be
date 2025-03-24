/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateUserSizeDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 12)
  username: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  chest_circum: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  body_length: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  waist_circum: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  hip_circum: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  sleeve_length: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  shoulder_width: number;
}

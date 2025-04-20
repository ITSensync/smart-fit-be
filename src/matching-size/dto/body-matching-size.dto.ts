import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class BodyMatchingSizeDto {
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

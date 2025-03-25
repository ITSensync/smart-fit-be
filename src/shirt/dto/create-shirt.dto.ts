import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

export class CreateShirtDto {
  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  detail: string;

  @IsArray()
  @ValidateNested({ each: true }) //validated nested array
  @Type(() => Size) //transform to size type
  @IsNotEmpty()
  sizes: Size[];
}

export class Size {
  @IsString()
  @IsNotEmpty()
  size: string;

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

import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchingSizeDto } from './create-matching-size.dto';

export class UpdateMatchingSizeDto extends PartialType(CreateMatchingSizeDto) {}

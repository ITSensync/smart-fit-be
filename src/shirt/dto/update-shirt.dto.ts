import { PartialType } from '@nestjs/mapped-types';
import { CreateShirtDto } from './create-shirt.dto';

export class UpdateShirtDto extends PartialType(CreateShirtDto) {}

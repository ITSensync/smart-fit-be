/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSizeDto } from './create-user-size.dto';

export class UpdateUserSizeDto extends PartialType(CreateUserSizeDto) {}

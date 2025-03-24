import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserSizeService } from './user-size.service';
import { CreateUserSizeDto } from './dto/create-user-size.dto';
import { UpdateUserSizeDto } from './dto/update-user-size.dto';

@Controller('user-size')
export class UserSizeController {
  constructor(private readonly userSizeService: UserSizeService) {}

  @Post()
  create(@Body() createUserSizeDto: CreateUserSizeDto) {
    return this.userSizeService.create(createUserSizeDto);
  }

  @Get()
  findAll() {
    return this.userSizeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSizeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserSizeDto: UpdateUserSizeDto,
  ) {
    return this.userSizeService.update(id, updateUserSizeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSizeService.remove(id);
  }
}

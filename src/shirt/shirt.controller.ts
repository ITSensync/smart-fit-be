import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CreateShirtDto } from './dto/create-shirt.dto';
import { ShirtService } from './shirt.service';
import { Response } from 'express';
import { UpdateShirtDto } from './dto/update-shirt.dto';

@Controller('shirt')
export class ShirtController {
  constructor(readonly shirtService: ShirtService) {}

  @Post()
  async create(
    @Body() createShirtDto: CreateShirtDto,
    @Res() response: Response,
  ) {
    const result = await this.shirtService.create(createShirtDto);
    return response.status(result.status).send(result);
  }

  @Get()
  async findAll(
    @Res() response: Response,
    @Query('relation', new ParseBoolPipe()) relation: boolean,
  ) {
    const result = await this.shirtService.findAllWithRelation(relation);
    return response.status(result.status).send(result);
  }

  @Get(':id')
  async findOne(
    @Res() response: Response,
    @Param('id') id: string,
    @Query('relation', new ParseBoolPipe()) relation: boolean,
  ) {
    const result = await this.shirtService.findOneWithRelation(id, relation);
    return response.status(result.status).send(result);
  }

  @Patch(':id')
  async update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() updateDto: UpdateShirtDto,
  ) {
    const result = await this.shirtService.update(id, updateDto);
    return response.status(result.status).send(result);
  }

  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    const result = await this.shirtService.remove(id);
    return response.status(result.status).send(result);
  }
}

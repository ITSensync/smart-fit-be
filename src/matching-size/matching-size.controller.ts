import { Controller, Get, Query, Res } from '@nestjs/common';
import { MatchingSizeService } from './matching-size.service';
import { Response } from 'express';

@Controller('matching-size')
export class MatchingSizeController {
  constructor(private readonly matchingSizeService: MatchingSizeService) {}

  @Get()
  async matchingSize(
    @Res() response: Response,
    @Query('userId') userId: string,
    @Query('shirtId') shirtId: string,
  ) {
    const result = await this.matchingSizeService.matching(shirtId, userId);
    return response.status(result.status).send(result);
  }
}

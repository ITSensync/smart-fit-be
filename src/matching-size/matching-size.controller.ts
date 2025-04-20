import { Body, Controller, Post, Query, Res } from '@nestjs/common';
import { MatchingSizeService } from './matching-size.service';
import { Response } from 'express';
import { BodyMatchingSizeDto } from './dto/body-matching-size.dto';

@Controller('matching-size')
export class MatchingSizeController {
  constructor(private readonly matchingSizeService: MatchingSizeService) {}

  @Post()
  async matchingSize(
    @Res() response: Response,
    @Body() bodyMathcingSizeDto: BodyMatchingSizeDto,
    // @Query('userId') userId: string,
    @Query('shirtId') shirtId: string,
  ) {
    console.log(bodyMathcingSizeDto);
    const result = await this.matchingSizeService.matching(
      shirtId,
      bodyMathcingSizeDto,
    );
    return response.status(result.status).send(result);
  }
}

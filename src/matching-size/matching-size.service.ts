import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ShirtSize, UserSize } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MatchingSizeService {
  constructor(readonly prismaService: PrismaService) {}

  async matching(shirtId: string, userId: string) {
    try {
      const userData = await this.prismaService.userSize.findUnique({
        where: {
          id: userId,
        },
      });

      const shirtData = await this.prismaService.shirt.findUnique({
        where: {
          id: shirtId,
        },
        include: { sizes: true },
      });

      if (!userData || !shirtData) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'User or Shirt data not found!',
        };
      }

      const resultMatching = this.manualMatchSizeThreshold(
        userData,
        shirtData.sizes,
      );

      if (resultMatching.length < 1) {
        return {
          status: HttpStatus.OK,
          message: 'There is not shirt matching with your body size!',
        };
      }

      return {
        status: HttpStatus.OK,
        message: 'Matching shirt Success!',
        data: resultMatching,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  manualMatchSizeThreshold(
    userSize: UserSize,
    shirtSize: ShirtSize[],
    threshold: number = 5,
  ) {
    return (
      shirtSize
        .map((shirt) => {
          const diffChestCircum = Math.abs(
            userSize.chest_circum - shirt.chest_circum,
          );
          const diffBodyLength = Math.abs(
            userSize.body_length - shirt.body_length,
          );
          const diffWaistCircum = Math.abs(
            userSize.waist_circum - shirt.waist_circum,
          );
          const diffHipCircum = Math.abs(
            userSize.hip_circum - shirt.hip_circum,
          );
          const diffSleeveLength = Math.abs(
            userSize.sleeve_length - shirt.sleeve_length,
          );
          const diffShoulderWidth = Math.abs(
            userSize.shoulder_width - shirt.shoulder_width,
          );

          const totalDiff =
            diffChestCircum +
            diffBodyLength +
            diffWaistCircum +
            diffHipCircum +
            diffSleeveLength +
            diffShoulderWidth;

          const maxPossibleDiff = threshold * 6;

          const matchPercentage = Math.max(
            0,
            100 - (totalDiff / maxPossibleDiff) * 100,
          );
          console.log(totalDiff);
          console.log(100 - (totalDiff / maxPossibleDiff) * 100);

          const isMatch =
            diffChestCircum <= threshold &&
            diffBodyLength <= threshold &&
            diffHipCircum <= threshold &&
            diffShoulderWidth <= threshold &&
            diffSleeveLength <= threshold &&
            diffWaistCircum <= threshold;

          console.log(shirt.size);
          console.log(matchPercentage.toFixed(2) + '%');
          return {
            size: shirt.size,
            match_percentage: matchPercentage.toFixed(2) + '%',
            isMatch,
          };
        })
        // .filter((shirt) => shirt.isMatch)
        .sort(
          (a, b) =>
            parseFloat(b.match_percentage) - parseFloat(a.match_percentage),
        )
    );
  }
}

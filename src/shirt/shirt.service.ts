import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateShirtDto } from './dto/create-shirt.dto';
import { Shirt, ShirtSize } from '@prisma/client';
import { Response } from 'src/Response/response';
import { UpdateShirtDto } from './dto/update-shirt.dto';

export type ShirtWithSizes = Shirt & { sizes: ShirtSize[] };

@Injectable()
export class ShirtService {
  constructor(readonly prismaService: PrismaService) {}

  async create(shirtDto: CreateShirtDto): Promise<Response<Shirt>> {
    try {
      const { sizes, ...shirtProps } = shirtDto;
      const newShirt = await this.prismaService.shirt.create({
        data: {
          model: shirtProps.model,
          detail: shirtProps.detail,
          sizes: {
            create: sizes,
          },
        },
        include: { sizes: true },
      });

      return {
        status: HttpStatus.CREATED,
        message: 'Create new shirt successfull!',
        data: newShirt,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async findAllWithRelation(
    includeState: boolean,
  ): Promise<Response<ShirtWithSizes[]>> {
    try {
      const allShirt = await this.prismaService.shirt.findMany({
        include: { sizes: includeState },
      });

      return {
        status: HttpStatus.OK,
        message: 'Get Shirt Successfull!',
        data: allShirt,
      };
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException(error);
    }
  }

  async findOneWithRelation(
    id: string,
    includeState: boolean,
  ): Promise<Response<ShirtWithSizes | null>> {
    try {
      const shirt = await this.prismaService.shirt.findFirst({
        include: { sizes: includeState },
        where: {
          id,
        },
      });

      if (!shirt) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Shirt Data Not Found!',
          data: null,
        };
      }

      return {
        status: HttpStatus.OK,
        message: 'Get Shirt Successfull!',
        data: shirt,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async update(
    id: string,
    updateDto: UpdateShirtDto,
  ): Promise<Response<ShirtWithSizes>> {
    try {
      const updatedShirt = await this.prismaService.shirt.update({
        where: {
          id,
        },
        data: {
          ...updateDto,
          sizes: updateDto.sizes
            ? {
                deleteMany: {},
                create: updateDto.sizes,
              }
            : undefined,
        },
        include: { sizes: true },
      });

      return {
        status: HttpStatus.OK,
        message: 'Update shirt data successfull!',
        data: updatedShirt,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async remove(id: string): Promise<Response<any>> {
    try {
      await this.prismaService.shirt.delete({
        where: {
          id,
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'Delete Shirt Data Successfull!',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: {} as any,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}

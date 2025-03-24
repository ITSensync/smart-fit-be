import {
  HttpStatus,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserSizeDto } from './dto/create-user-size.dto';
import { UpdateUserSizeDto } from './dto/update-user-size.dto';
import { PrismaService } from 'prisma/prisma.service';
import { UserSize } from '@prisma/client';
import { Response } from 'src/Response/response';

@Injectable()
export class UserSizeService {
  constructor(private prismaService: PrismaService) {}

  async create(
    createUserSizeDto: CreateUserSizeDto,
  ): Promise<Response<UserSize>> {
    try {
      const newUserSize = await this.prismaService.userSize.create({
        data: {
          ...createUserSizeDto,
        },
      });

      return {
        status: HttpStatus.CREATED,
        message: 'Create User Size Data Success',
        data: newUserSize,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async findAll(): Promise<Response<UserSize[]>> {
    try {
      const allUserSize = await this.prismaService.userSize.findMany();
      return {
        status: HttpStatus.OK,
        message: 'Get User Size Success',
        data: allUserSize,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async findOne(id: string): Promise<Response<UserSize>> {
    const oneUserSize = await this.prismaService.userSize.findFirst({
      where: {
        id,
      },
    });

    if (!oneUserSize) {
      throw new NotFoundException('User Size data not found');
    }

    return {
      status: HttpStatus.OK,
      message: 'Get User Size Success',
      data: oneUserSize,
    };
  }

  async update(
    id: string,
    updateUserSizeDto: UpdateUserSizeDto,
  ): Promise<Response<UserSize>> {
    try {
      const updatedUserSize = await this.prismaService.userSize.update({
        where: {
          id,
        },
        data: {
          ...updateUserSizeDto,
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'Update User Size Data Successfull',
        data: updatedUserSize,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async remove(id: string): Promise<Response<UserSize>> {
    try {
      await this.prismaService.userSize.delete({
        where: {
          id,
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'Success Delete User Size Data',
        data: {} as UserSize,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}

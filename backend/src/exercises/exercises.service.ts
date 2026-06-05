import { Injectable } from '@nestjs/common';
import { PrismaClient, Exercise } from '@prisma/client';

@Injectable()
export class ExercisesService {
  private prisma = new PrismaClient();

  async findAll(): Promise<Exercise[]> {
    return this.prisma.exercise.findMany();
  }

  async findOne(id: number): Promise<Exercise | null> {
    return this.prisma.exercise.findUnique({ where: { id } });
  }

  async create(data: { name: string; type: string; targetMuscle?: string; youtubeId?: string }): Promise<Exercise> {
    return this.prisma.exercise.create({ data });
  }
}

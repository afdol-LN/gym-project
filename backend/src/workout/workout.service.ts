import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class WorkoutService {
  private prisma = new PrismaClient();

  async getDailyWorkout(dayOfWeek: number) {
    // dayOfWeek: 1 (Mon) - 7 (Sun)
    return this.prisma.daySchedule.findMany({
      where: { dayOfWeek },
      include: { exercise: true },
      orderBy: { order: 'asc' },
    });
  }
}

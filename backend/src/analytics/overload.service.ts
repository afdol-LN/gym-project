import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class OverloadService {
  private prisma = new PrismaClient();

  async getRecommendation(exerciseId: number) {
    const lastSession = await this.prisma.workoutLog.findFirst({
      where: { exerciseId },
      orderBy: { id: 'desc' },
      take: 1,
    });

    if (!lastSession) return { weight: 10, reps: 10 }; // Default for new exercise

    // Double Progression Logic:
    // If reps reached target range, increase weight by 2.5kg
    const targetWeight = lastSession.reps >= 12 ? lastSession.weight + 2.5 : lastSession.weight;
    const targetReps = lastSession.reps >= 12 ? 8 : lastSession.reps + 1;

    return { weight: targetWeight, reps: targetReps };
  }
}

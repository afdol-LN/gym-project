import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding exercises...');
  
  const exercises = [
    { name: 'Bench Press', type: 'STRENGTH', targetMuscle: 'Chest', youtubeId: 'sqOw2Y6uDWQ' },
    { name: 'Squat', type: 'STRENGTH', targetMuscle: 'Legs', youtubeId: 'bUojUgW-Sfk' },
    { name: 'Deadlift', type: 'STRENGTH', targetMuscle: 'Back', youtubeId: 'r4MzGI8jW5Y' },
  ];

  for (const ex of exercises) {
    await prisma.exercise.create({ data: ex });
  }
  
  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

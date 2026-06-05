import { Module } from '@nestjs/common';
import {ExercisesModule} from './exercises/exercises.module';

@Module({
  imports: [ExercisesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

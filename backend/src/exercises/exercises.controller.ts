import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  findAll() {
    return this.exercisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exercisesService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.exercisesService.create(body);
  }
}

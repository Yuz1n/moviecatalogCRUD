// src/movies/dto/create-movie.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({ example: 'Inception', description: 'The title of the movie' })
  title: string;

  @ApiProperty({ example: 'A mind-bending thriller', description: 'The description of the movie' })
  description: string;

  @ApiProperty({ example: 2010, description: 'The release year of the movie' })
  year: number;
}

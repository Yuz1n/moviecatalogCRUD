// src/movies/dto/update-movie.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class UpdateMovieDto {
  @ApiProperty({ example: 'Inception', description: 'The title of the movie', required: false })
  title?: string;

  @ApiProperty({ example: 'A mind-bending thriller', description: 'The description of the movie', required: false })
  description?: string;

  @ApiProperty({ example: 2010, description: 'The release year of the movie', required: false })
  year?: number;
}

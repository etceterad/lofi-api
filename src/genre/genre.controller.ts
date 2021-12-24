import { Controller, Get, Inject } from '@nestjs/common';
import { GenreService } from './genre.service';

@Controller('genre')
export class GenreController {
    constructor(
        @Inject(GenreService) private readonly genreService: GenreService,
    ) {}

    @Get('')
    async get() {
        return await this.genreService.getAll();
    }
}

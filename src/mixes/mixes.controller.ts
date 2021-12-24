import {
    Controller,
    Get,
    Inject,
    NotFoundException,
    Param,
} from '@nestjs/common';
import { MixesService } from './mixes.service';
import { GenreEnum } from '../genre/genre.model';

@Controller('mixes')
export class MixesController {
    constructor(
        @Inject(MixesService)
        private readonly mixesService: MixesService,
    ) {}

    @Get(':genre/all-mixes')
    async get(@Param('genre') genre: GenreEnum) {
        return await this.mixesService.getAll(genre);
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        const mix = await this.mixesService.findOneById(id);
        if (!mix) {
            throw new NotFoundException(MIX_NOT_FOUND);
        }
        return mix;
    }
}

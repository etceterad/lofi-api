import {
    Controller,
    Get,
    Inject,
    NotFoundException,
    Param,
} from '@nestjs/common';
import { RadiosService } from './radios.service';
import { GenreEnum } from '../genre/genre.model';

@Controller('radios')
export class RadiosController {
    constructor(
        @Inject(RadiosService)
        private readonly radiosService: RadiosService,
    ) {}

    @Get(':genre/all-radios')
    async get(@Param('genre') genre: GenreEnum) {
        return await this.radiosService.getAll(genre);
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        const radio = await this.radiosService.getOneById(id);
        if (!radio) {
            throw new NotFoundException(RADIO_NOT_FOUND);
        }
        return radio;
    }
}

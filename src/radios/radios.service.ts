import { Injectable } from '@nestjs/common';
import { RadiosModel } from './radios.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { GenreEnum } from '../genre/genre.model';

@Injectable()
export class RadiosService {
    constructor(
        @InjectModel(RadiosModel)
        private readonly radiosModel: ModelType<RadiosModel>,
    ) {}

    async getAll(genre: GenreEnum) {
        return this.radiosModel.find({ genre });
    }

    async getOneById(id: string) {
        return this.radiosModel.findById(id);
    }
}

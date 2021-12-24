import { Injectable } from '@nestjs/common';
import { MixesModel } from './mixes.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { GenreEnum } from '../genre/genre.model';

@Injectable()
export class MixesService {
    constructor(
        @InjectModel(MixesModel)
        private readonly mixesModel: ModelType<MixesModel>,
    ) {}

    async getAll(genre: GenreEnum) {
        return this.mixesModel.find({ genre });
    }

    async findOneById(id: string) {
        return this.mixesModel.findById(id).exec();
    }
}

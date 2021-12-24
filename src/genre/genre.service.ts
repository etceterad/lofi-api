import { Injectable } from '@nestjs/common';
import { GenreModel } from './genre.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class GenreService {
    constructor(
        @InjectModel(GenreModel)
        private readonly genreModel: ModelType<GenreModel>,
    ) {}

    async getAll() {
        return this.genreModel.find().exec();
    }
}

import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';
import { GenreEnum } from '../genre/genre.model';

export interface MixesModel extends Base {}
export class MixesModel extends TimeStamps {
    @prop()
    url: string;

    @prop({ enum: GenreEnum })
    genre: GenreEnum;

    @prop()
    author: string;

    @prop()
    duration: number;

    @prop()
    preview: string;
}

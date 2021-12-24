import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export enum GenreEnum {
  Raining,
  Chill,
  Study
}

export interface GenreModel extends Base {}
export class GenreModel extends TimeStamps {
  @prop({ enum: GenreEnum })
  genre: GenreEnum;
}

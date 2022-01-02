import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { GenreEnum } from '../genre/genre.model';

export interface RadiosModel extends Base {}
export class RadiosModel extends TimeStamps {
    @prop()
    url: string;

    @prop()
    title: string;

    @prop()
    genre: GenreEnum;

    @prop()
    author: string;

    @prop()
    preview: string;
}

// Study
//https://www.youtube.com/watch?v=5qap5aO4i9A
//https://www.youtube.com/watch?v=kgx4WGK0oNU
//https://www.youtube.com/watch?v=uxR_sTZnBtg
//https://www.youtube.com/watch?v=7NOSDKb0HlU
//https://www.youtube.com/watch?v=Rc5D2ubqqIY
//https://www.youtube.com/watch?v=CbNFqtzLtQQ

//Chill
//https://www.youtube.com/watch?v=21qNxnCS8WU
//https://www.youtube.com/watch?v=CbNFqtzLtQQ
//https://www.youtube.com/watch?v=uASdiXpRrzg
//https://www.youtube.com/watch?v=ZNuZ_NEoGWs

// Raining
//https://www.youtube.com/watch?v=0n0leLcHI7E
//https://www.youtube.com/watch?v=l7TxwBhtTUY
//https://www.youtube.com/watch?v=BbQM9UbQjFI
//https://www.youtube.com/watch?v=my7tlu6pJAI -
//https://www.youtube.com/watch?v=7LBlqXE_uS0 -

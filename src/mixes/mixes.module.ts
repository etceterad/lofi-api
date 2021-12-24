import { Module } from '@nestjs/common';
import { MixesController } from './mixes.controller';
import { MixesService } from './mixes.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { ConfigModule } from '@nestjs/config';
import { MixesModel } from './mixes.model';

@Module({
    controllers: [MixesController],
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: MixesModel,
                schemaOptions: {
                    collection: 'Mix',
                },
            },
        ]),
        ConfigModule,
    ],
    providers: [MixesService],
})
export class MixesModule {}

import { Module } from '@nestjs/common';
import { RadiosController } from './radios.controller';
import { RadiosService } from './radios.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { ConfigModule } from '@nestjs/config';
import { RadiosModel } from './radios.model';

@Module({
    controllers: [RadiosController],
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: RadiosModel,
                schemaOptions: {
                    collection: 'Radio',
                },
            },
        ]),
        ConfigModule,
    ],
    providers: [RadiosService],
})
export class RadiosModule {}

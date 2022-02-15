import { Module } from '@nestjs/common';
import { TypesDossierService } from './types-dossier.service';
import { TypesDossierController } from './types-dossier.controller';
import { TypeDossier } from './entities/type-dossier.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TypeDossier])],
  controllers: [TypesDossierController],
  providers: [TypesDossierService],
})
export class TypesDossierModule {}

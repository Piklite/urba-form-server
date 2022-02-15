import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeDossierDto } from './create-type-dossier.dto';

export class UpdateTypeDossierDto extends PartialType(CreateTypeDossierDto) {}

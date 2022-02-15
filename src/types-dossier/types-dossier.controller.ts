import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypesDossierService } from './types-dossier.service';
import { CreateTypeDossierDto } from './dto/create-type-dossier.dto';
import { UpdateTypeDossierDto } from './dto/update-type-dossier.dto';

@Controller('types-dossier')
export class TypesDossierController {
  public constructor(
    private readonly typesDossierService: TypesDossierService,
  ) {}

  @Post()
  public create(@Body() createTypeDossierDto: CreateTypeDossierDto) {
    return this.typesDossierService.create(createTypeDossierDto);
  }

  @Get()
  public findAll() {
    return this.typesDossierService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.typesDossierService.findOne(+id);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() updateTypeDossierDto: UpdateTypeDossierDto,
  ) {
    return this.typesDossierService.update(+id, updateTypeDossierDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.typesDossierService.remove(+id);
  }
}

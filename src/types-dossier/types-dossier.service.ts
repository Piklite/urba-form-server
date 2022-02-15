import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeDossierDto } from './dto/create-type-dossier.dto';
import { UpdateTypeDossierDto } from './dto/update-type-dossier.dto';
import { TypeDossier } from './entities/type-dossier.entity';

@Injectable()
export class TypesDossierService {
  public constructor(
    @InjectRepository(TypeDossier)
    private readonly typeDossierRepository: Repository<TypeDossier>,
  ) {}

  public create(createTypeDossierDto: CreateTypeDossierDto) {
    const dossier = this.typeDossierRepository.create(createTypeDossierDto);
    return this.typeDossierRepository.save(dossier);
  }

  public findAll() {
    return this.typeDossierRepository.find();
  }

  public async findOne(id: number) {
    const typeDossier = await this.typeDossierRepository.findOne(id);
    if (!typeDossier) {
      throw new NotFoundException(
        `Le type de dossier #${id} n'a pas été trouvé`,
      );
    } else {
      return typeDossier;
    }
  }

  public async update(id: number, updateTypeDossierDto: UpdateTypeDossierDto) {
    const typeDossier = await this.typeDossierRepository.preload({
      id: id,
      ...updateTypeDossierDto,
    });
    if (!typeDossier) {
      throw new NotFoundException(
        `Le type de dossier #${id} n'a pas été trouvé`,
      );
    }
    return this.typeDossierRepository.save(typeDossier);
  }

  public async remove(id: number) {
    const typeDossier = await this.findOne(id);
    return this.typeDossierRepository.remove(typeDossier);
  }
}

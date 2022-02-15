import { Test, TestingModule } from '@nestjs/testing';
import { TypesDossierController } from './types-dossier.controller';
import { TypesDossierService } from './types-dossier.service';

describe('TypesDossierController', () => {
  let controller: TypesDossierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesDossierController],
      providers: [TypesDossierService],
    }).compile();

    controller = module.get<TypesDossierController>(TypesDossierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

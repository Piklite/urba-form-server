import { Test, TestingModule } from '@nestjs/testing';
import { TypesDossierService } from './types-dossier.service';

describe('TypesDossierService', () => {
  let service: TypesDossierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypesDossierService],
    }).compile();

    service = module.get<TypesDossierService>(TypesDossierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

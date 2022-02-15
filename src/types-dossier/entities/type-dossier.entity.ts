import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TypeDossier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle: string;

  @Column()
  description: string;

  @Column()
  code: string;

  @Column({ default: true })
  estActif: boolean;
}

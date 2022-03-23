import {Entity, model, property, belongsTo} from '@loopback/repository';
import { CategorieWithRelations, User, UserWithRelations } from '.';
import {Categorie} from './categorie.model';

@model({settings: {strict: false}})
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'string',
  })
  image?: string;

  @belongsTo(() => Categorie)
  categorieId: string;

  @belongsTo(() => User)
  userId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  categorie?: CategorieWithRelations;
  user?: UserWithRelations;
}

export type ProductWithRelations = Product & ProductRelations;

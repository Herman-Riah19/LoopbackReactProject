import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import { ProductRepository } from '.';
import {TryArtDataSource} from '../datasources';
import {Product, Categorie, CategorieRelations} from '../models';

export class CategorieRepository extends DefaultCrudRepository<
  Categorie,
  typeof Categorie.prototype.id,
  CategorieRelations
> {

  public readonly products: HasManyRepositoryFactory<
    Product,
    typeof Categorie.prototype.id
  >;

  constructor(
    @inject('datasources.tryArt') dataSource: TryArtDataSource,
    @repository.getter('ProductRepository')
    productRepositoryGetter : Getter<ProductRepository>
  ) {
    super(Categorie, dataSource);

    this.products = this.createHasManyRepositoryFactoryFor(
      'products',
      productRepositoryGetter
    );
  }
}

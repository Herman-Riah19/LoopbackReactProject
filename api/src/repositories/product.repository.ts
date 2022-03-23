import {inject} from '@loopback/core';
import {DefaultCrudRepository, FilterExcludingWhere} from '@loopback/repository';
import {TryArtDataSource} from '../datasources';
import {Product, ProductRelations} from '../models';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {

  constructor(
    @inject('datasources.tryArt') dataSource: TryArtDataSource,
  ) {
    super(Product, dataSource);
  }
}

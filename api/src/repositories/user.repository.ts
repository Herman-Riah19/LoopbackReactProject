import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import { ProductRepository } from '.';
import {TryArtDataSource} from '../datasources';
import {Product, User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly products: HasManyRepositoryFactory<
    Product,
    typeof User.prototype.id
  >;

  constructor(
    @inject('datasources.tryArt') dataSource: TryArtDataSource,
    @repository.getter('ProductRepository')
    productRepositoryGetter: Getter<ProductRepository>  
  ) {
    super(User, dataSource);
  
    this.products = this.createHasManyRepositoryFactoryFor(
      'products',
      productRepositoryGetter
    )
  }

  public findByEmail(email: string) {
    return this.findOne({where: {email}});
  }
}

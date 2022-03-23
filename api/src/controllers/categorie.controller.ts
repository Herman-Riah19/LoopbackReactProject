import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Categorie, Product} from '../models';
import {CategorieRepository} from '../repositories';

export class CategorieController {
  constructor(
    @repository(CategorieRepository)
    public categorieRepository : CategorieRepository,
  ) {}

  @post('/categories')
  @response(200, {
    description: 'Categorie model instance',
    content: {'application/json': {schema: getModelSchemaRef(Categorie)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categorie, {
            title: 'NewCategorie',
            exclude: ['id'],
          }),
        },
      },
    })
    categorie: Omit<Categorie, 'id'>,
  ): Promise<Categorie> {
    return this.categorieRepository.create(categorie);
  }

  @post('/categories/{id}/product')
  async createProduct(
    @param.path.string('id') categorieId: typeof Categorie.prototype.id,
    @requestBody() productData: Product,
  ): Promise<Product> {
    return this.categorieRepository.products(categorieId).create(productData);
  }

  @get('/categories/count')
  @response(200, {
    description: 'Categorie model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Categorie) where?: Where<Categorie>,
  ): Promise<Count> {
    return this.categorieRepository.count(where);
  }

  @get('/categories')
  @response(200, {
    description: 'Array of Categorie model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Categorie, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Categorie) filter?: Filter<Categorie>,
  ): Promise<Categorie[]> {
    return this.categorieRepository.find(filter);
  }

  @patch('/categories')
  @response(200, {
    description: 'Categorie PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categorie, {partial: true}),
        },
      },
    })
    categorie: Categorie,
    @param.where(Categorie) where?: Where<Categorie>,
  ): Promise<Count> {
    return this.categorieRepository.updateAll(categorie, where);
  }

  @get('/categories/{id}')
  @response(200, {
    description: 'Categorie model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Categorie, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Categorie, {exclude: 'where'}) filter?: FilterExcludingWhere<Categorie>
  ): Promise<Categorie> {
    return this.categorieRepository.findById(id, filter);
  }

  @patch('/categories/{id}')
  @response(204, {
    description: 'Categorie PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categorie, {partial: true}),
        },
      },
    })
    categorie: Categorie,
  ): Promise<void> {
    await this.categorieRepository.updateById(id, categorie);
  }

  @put('/categories/{id}')
  @response(204, {
    description: 'Categorie PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() categorie: Categorie,
  ): Promise<void> {
    await this.categorieRepository.replaceById(id, categorie);
  }

  @del('/categories/{id}')
  @response(204, {
    description: 'Categorie DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.categorieRepository.deleteById(id);
  }
}

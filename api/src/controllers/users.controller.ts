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

import {compare, genSalt, hash} from 'bcrypt';
import { request } from 'http';

import {Product, User} from '../models';
import {UserRepository} from '../repositories';

export class UsersController {
  constructor(
    @repository(UserRepository)
    public userRepository : UserRepository,
  ) {}

  @post('/users/signin')
  @response(200, {
    description: 'User sign in instance',
    content: { 'application/json': {schema: getModelSchemaRef(User)}},
  })
  async signin(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUser',
            exclude: ['id'],
          }),
        },
      },
    })
    user: Omit<User, 'id'>
  ): Promise<any> {
      const newUser = await this.userRepository.findByEmail(user.email);

      if(!newUser) {
        return new Promise((resolve, reject) => {
          reject(JSON.stringify('User not found'))
        })
      }
      
      const validPassword = compare(user.password, newUser.password);

      if(await validPassword === false){
        return Response.error();
      } 
      return newUser
  }

  @post('/users')
  @response(200, {
    description: 'User model instance',
    content: {'application/json': {schema: getModelSchemaRef(User)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUser',
            exclude: ['id'],
          }),
        },
      },
    })
    user: Omit<User, 'id'>,
  ): Promise<User> {
    let newUser:User;
    
    const salt = await genSalt(10);
    const hashedPassword = await hash(user.password, salt);

    newUser = new User({
        name: user.name,
        firstname: user.firstname,
        description: user.description,
        email: user.email,
        password: hashedPassword
    });
      
    return this.userRepository.create(newUser);
  }

  @post('/users/{id}/product')
  async createProduct(
    @param.path.string('id') userId: typeof User.prototype.id,
    @requestBody() productData: Product
  ): Promise<Product> {
    return this.userRepository.products(userId).create(productData);
  }

  @get('/users/{id}/products')
  @response(200, {
    description: 'Array of Product model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Product, {includeRelations: true}),
        },
      },
    },
  })
  async findUserProduct(
    @param.path.string('id') userId: typeof User.prototype.id,
    @param.filter(Product) filter?: Filter<Product>,
  ): Promise<Product[]> {
    return this.userRepository.products(userId).find(filter);
  }

  @get('/users/count')
  @response(200, {
    description: 'User model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(User) where?: Where<User>,
  ): Promise<Count> {
    return this.userRepository.count(where);
  }

  @get('/users')
  @response(200, {
    description: 'Array of User model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(User, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(User) filter?: Filter<User>,
  ): Promise<User[]> {
    return this.userRepository.find(filter);
  }

  @patch('/users')
  @response(200, {
    description: 'User PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: User,
    @param.where(User) where?: Where<User>,
  ): Promise<Count> {
    return this.userRepository.updateAll(user, where);
  }

  @get('/users/{id}')
  @response(200, {
    description: 'User model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(User, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(User, {exclude: 'where'}) filter?: FilterExcludingWhere<User>
  ): Promise<User> {
    return this.userRepository.findById(id, filter);
  }

  @patch('/users/{id}')
  @response(204, {
    description: 'User PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: User,
  ): Promise<void> {
    let newUser:User;
    
    const salt = await genSalt(10);
    const hashedPassword = await hash(user.password, salt);

    newUser = new User({
        name: user.name,
        firstname: user.firstname,
        description: user.description,
        email: user.email,
        password: hashedPassword
    });
      
    await this.userRepository.updateById(id, newUser);
  }

  @put('/users/{id}')
  @response(204, {
    description: 'User PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() user: User,
  ): Promise<void> {
    await this.userRepository.replaceById(id, user);
  }

  @del('/users/{id}')
  @response(204, {
    description: 'User DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userRepository.deleteById(id);
  }
}

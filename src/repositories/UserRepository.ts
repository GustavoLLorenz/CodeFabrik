import { User } from "entity/User";
import IUser from "interfaces/IUser";
import { getRepository, Repository } from "typeorm";

export class UserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(newUser: IUser): Promise<User> {
    console.log('cheguei no repositorio', newUser)
    const { user_name, cpf_cnpj } = newUser
    console.log('desestruturado', user_name, cpf_cnpj)

    const user = this.ormRepository.create(newUser)

    await this.ormRepository.save(user);

    return user;
  }

}
import { User } from "entity/User";
import IUser from "interfaces/IUser";
import { getRepository, Repository } from "typeorm";
import CarteiraRepository from "./CarteiraRepository";

export class UserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

public async create(newUser: IUser): Promise<User | Error> {
   
    if (await this.ormRepository.findOne({cpf_cnpj: newUser.cpf_cnpj})) {
    
       return new Error( 'usuario ja cadastrado')
    }
    const user = this.ormRepository.create(newUser)
    const wallet = new CarteiraRepository()



    await this.ormRepository.save(user);

    const userWallet = {
      user_id: user.id,
      saldo: '0',

    }

    await wallet.createWallet(userWallet)

    return user;
  }

}
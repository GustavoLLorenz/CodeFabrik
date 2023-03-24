import { Carteira } from "entity/Carteira";
import { User } from "entity/User";
import IUser from "interfaces/IUser";
import { getRepository, Repository } from "typeorm";
import WalletRepository from "./WalletRepository";
import CarteiraRepository from "./WalletRepository";

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

  public async findAllUser():Promise <User[]> {
    const users = await this.ormRepository.find({where: {
      deleted_at: null
    }});

    return users;

  }
  public async findByCpf(cpf: string):Promise <User | Error> {
    const users = await this.ormRepository.findOne({where: {
      cpf_cnpj:cpf,
      deleted_at: null
    }});

    if (!users) {
      return new Error( 'usuario não encontrado')
    }
    return users;

  }

  public async deleteByCpf(cpf: string):Promise <User | Error> {
    const users = await this.ormRepository.findOne({where: {
      cpf_cnpj:cpf
    }});

    if (!users) {
      return new Error( 'usuario não encontrado')
    }

    const userWallet = await new WalletRepository()
    users.deleted_at = new Date()

    await this.ormRepository.save(users)
    await userWallet.deleteWallet(users.id)

    return users;

  }

  // public async updateSaldo(id:string, valor:string):Promise<Carteira | Error> {
  //   const user = await this.ormRepository.findOne({
  //     where: {
  //       id,
  //       deleted_at: null
  //     }
  //   })

  //   if (!user) {
  //     return new Error( 'usuario não encontrado')
  //   }
  //   user.
  // }

}
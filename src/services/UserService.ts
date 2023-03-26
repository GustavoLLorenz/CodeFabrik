import { User } from "entity/User";
import {hash, compare} from 'bcrypt'
import IUser from "interfaces/IUser";
import { UserRepository } from "repositories/UserRepository";
import WalletRepository from "repositories/WalletRepository";
import { IUserWithWallet } from "interfaces/IUserWithWallet";


export class UserService {
  private repository: UserRepository;
  private walletRepo: WalletRepository;

  constructor() {
    this.repository = new UserRepository()
    this.walletRepo = new WalletRepository()
  }

  public async create(newUser: IUser): Promise<User | Error> {
    console.log('no service create user', newUser)
    const passwordHash = await hash(newUser.password, 8)
    const encrytedNewUser = {
      user_name: newUser.user_name,
      cpf_cnpj: newUser.cpf_cnpj,
      password: passwordHash
    }
    const user = await this.repository.create(encrytedNewUser)
    return user

  }

  public async userLogin(cpf_cnpj: string, password: string): Promise <IUserWithWallet | Error | undefined> {
    const user = await this.repository.findByCpf(cpf_cnpj)
    
    if (!user) {
      return new Error( 'usuario não encontrado')
    }
    if (user) {
      const checkPassword = await compare(password, user.password)
      if(!checkPassword) return new Error('Senha incorreta')
    }
    const wallet = await this.walletRepo.findWalletById(user.id)
    
   const objToReturn = {
    ...user,
    wallet: {...wallet}
   }
   console.log('objToReturn: ==>',objToReturn)

    return objToReturn as IUserWithWallet

  }

  public async findAllUsers(): Promise <User[]> {
   
    const users =  await this.repository.findAllUser()


    return users;
  }

  public async findByCpf(cpf: string): Promise <IUserWithWallet | Error> {
   
    const user =  await this.repository.findByCpf(cpf)
    if (!user) {
      return new Error( 'usuario não encontrado')
    }

    const wallet = await this.walletRepo.findWalletById(user.id)
    
    const objToReturn = {
     ...user,
     wallet: {...wallet}
    }
    console.log('objToReturn: ==>',objToReturn)
 
    return objToReturn as IUserWithWallet

  }


  public async findById(id: string): Promise <IUserWithWallet | Error> {
    console.log(id)
   
    const user =  await this.repository.findById(id)
    if (!user) {
      return new Error( 'usuario não encontrado')
    }

    const wallet = await this.walletRepo.findWalletById(user.id)
    
    const objToReturn = {
     ...user,
     wallet: {...wallet}
    }
    console.log('objToReturn: ==>',objToReturn)
 
    return objToReturn as IUserWithWallet
  


  }

  public async deleteByCpf(cpf: string): Promise <User | Error> {
   
    const user =  await this.repository.deleteByCpf(cpf)
  

    return user;
  }



}
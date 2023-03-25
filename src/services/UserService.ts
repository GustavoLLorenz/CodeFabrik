import { User } from "entity/User";
import {hash, compare} from 'bcrypt'
import IUser from "interfaces/IUser";
import { UserRepository } from "repositories/UserRepository";


export class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository()
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

  public async userLogin(cpf_cnpj: string, password: string): Promise <User | Error> {
    const user = await this.repository.findByCpf(cpf_cnpj)
    
    if (!user) {
      return new Error( 'usuario não encontrado')
    }
    if (user) {
      const checkPassword = await compare(password, user.password)
      if(!checkPassword) return new Error('Senha incorreta')
    }
    
   

    return user

  }

  public async findAllUsers(): Promise <User[]> {
   
    const users =  await this.repository.findAllUser()


    return users;
  }

  public async findByCpf(cpf: string): Promise <User | Error> {
   
    const user =  await this.repository.findByCpf(cpf)
    if (!user) {
      return new Error( 'usuario não encontrado')
    }
  

    return user;
  }

  public async deleteByCpf(cpf: string): Promise <User | Error> {
   
    const user =  await this.repository.deleteByCpf(cpf)
  

    return user;
  }



}
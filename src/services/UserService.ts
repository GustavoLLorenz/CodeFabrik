import { User } from "entity/User";
import IUser from "interfaces/IUser";
import { UserRepository } from "repositories/UserRepository";


export class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository()
  }

  public async create(newUser: IUser): Promise<User | Error> {

    const user = await this.repository.create(newUser)
    return user

  }

  public async findAllUsers(): Promise <User[]> {
   
    const users =  await this.repository.findAllUser()


    return users;
  }

  public async findByCpf(cpf: string): Promise <User | Error> {
   
    const users =  await this.repository.findByCpf(cpf)
  

    return users;
  }

  public async deleteByCpf(cpf: string): Promise <User | Error> {
   
    const user =  await this.repository.deleteByCpf(cpf)
  

    return user;
  }



}
import { User } from "entity/User";
import IUser from "interfaces/IUser";
import { UserRepository } from "repositories/UserRepository";


export class UserService {

  public async create(newUser: IUser): Promise<User> {
    console.log('cheguei no controler')
    const repository = new UserRepository()

    const user = await repository.create(newUser)
 

    return user

  }



}
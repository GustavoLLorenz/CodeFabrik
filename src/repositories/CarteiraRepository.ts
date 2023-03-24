import { Carteira } from "entity/Carteira";
import ICarteira from "interfaces/ICarteira";
import { getRepository, Repository } from "typeorm";


export default class CarteiraRepository {
  private ormRepository: Repository<Carteira>;

  constructor() {
    this.ormRepository = getRepository(Carteira);
  }

  public async createWallet(userInfo:ICarteira) {
  
    const wallet = this.ormRepository.create(userInfo);

    await this.ormRepository.save(wallet);
  }

}
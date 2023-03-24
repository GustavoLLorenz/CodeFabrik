import { Transacao } from "entity/Transacao";
import ITransacao from "interfaces/ITransacao";
import { getRepository, Repository } from "typeorm";


export default class TransactionRepository {
  private ormRepository: Repository<Transacao>;

  constructor() {
    this.ormRepository = getRepository(Transacao);
  }
  public async createTransaction(transactionInfo: ITransacao): Promise<Transacao> {
    
    const transaction = this.ormRepository.create(transactionInfo);
    await this.ormRepository.save(transaction);
    
    return transaction;
  }
}
import { Transacao } from "entity/Transacao";
import ITransacao from "interfaces/ITransacao";
import { getRepository, Repository } from "typeorm";


export default class TransactionRepository {
  private ormRepository: Repository<Transacao>;

  constructor() {
    this.ormRepository = getRepository(Transacao);
  }
  public async createTransaction(transactionInfo: ITransacao): Promise<Transacao> {
    console.log('na transaction', transactionInfo)
    const transaction = this.ormRepository.create(transactionInfo);
      console.log('transaction: --->',transaction)
    await this.ormRepository.save(transaction);
    
    return transaction;
  }
}
import { Transacao } from "entity/Transacao";
import TransactionRepository from "repositories/TransactionRepository";


export class TransactionService {
  private repository: TransactionRepository;

  constructor() {
    this.repository = new TransactionRepository();
  }

  public async findAllByCarteiraId(carteiraId: string): Promise <Transacao[]> {
    const transaction = this.repository.findAllByCarteiraId(carteiraId)
    return transaction;
  }
}
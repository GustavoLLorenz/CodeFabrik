import { Carteira } from "entity/Carteira";
import { Transacao } from "entity/Transacao";
import WalletRepository from "repositories/WalletRepository";


export default class WalletService {
  private repository: WalletRepository;

  constructor() {
    this.repository = new WalletRepository();
  }

  public async findAll(): Promise <Carteira[]> {
    const wallets = await this.repository.findAllWallet()

    return wallets
  } 

  public async createTransaction(id:string, tipo: string, valor_transacao: string): Promise < Error | Transacao> {
    const transaction = await this.repository.createTransaction(id, tipo, valor_transacao)
    return transaction
  };

}
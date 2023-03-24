import { Carteira } from "entity/Carteira";
import { Transacao } from "entity/Transacao";
import ICarteira from "interfaces/ICarteira";
import { getRepository, Repository } from "typeorm";
import TransactionRepository from "./TransactionRepository";


export default class WalletRepository {
  private ormRepository: Repository<Carteira>;
  //  private transactionRepo: Repository<Transacao>

  constructor() {
    this.ormRepository = getRepository(Carteira);
    // this.transactionRepo = getRepository(Transacao);
  }

  public async createWallet(userInfo:ICarteira) {
    // via create user
    const wallet = this.ormRepository.create(userInfo);

    await this.ormRepository.save(wallet);
  }

  public async findAllWallet(): Promise <Carteira[]> {
    const wallets = this.ormRepository.find({
      where: {
        deleted_at: null,
      }
    })

    return wallets;
  }

  public async createTransaction(id: string, tipo: string, valor_transacao: string): Promise <Transacao | Error > {
    const wallet = await this.ormRepository.findOne({
      where: {
        id: id
      }
    })
    if(!wallet) {
      return new Error('Carteira nao encontrada')
    }


    const newTransaction = new TransactionRepository()
    const transacao = await newTransaction.createTransaction(
      {
      carteira_id: wallet.id,
      tipo,
      valor_transacao
    })
    
    return transacao;

  }

}
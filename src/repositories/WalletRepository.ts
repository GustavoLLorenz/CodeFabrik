import { Carteira } from "entity/Carteira";
import { Transacao } from "entity/Transacao";
import ICarteira from "interfaces/ICarteira";
import { getRepository, Repository, Timestamp } from "typeorm";
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
        id: id,
        deleted_at: null,
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

    if (transacao.tipo === 'entrada') {
      wallet.saldo = (Number(wallet.saldo) + Number(transacao.valor_transacao)).toString()
     // Number(wallet.saldo) += Number(transacao.valor_transacao)
    } else if (transacao.tipo === 'saida' && Number(wallet.saldo) >= Number(transacao.valor_transacao)) {
      wallet.saldo = (Number(wallet.saldo) - Number(transacao.valor_transacao)).toString()
    } else {
      console.log('entrei no erro')
      return new Error('tipo de transação inválida ou saldo insuficiente!')
    }

    await this.ormRepository.save(wallet);
    
    return transacao;

  }

  public async deleteWallet(id: string):Promise<Carteira | Error> {
    const wallet = await this.ormRepository.findOne({
      where: {
        user_id: id
      }
    })
    if (!wallet) {
      return new Error('Carteira não encontrada.')
    }
    wallet.deleted_at = new Date();

    await this.ormRepository.save(wallet);
    return wallet;
  }

  public async findWalletById(id: string): Promise<Carteira | undefined > {
    const wallet = await this.ormRepository.findOne({
      where: {
        user_id: id
      }
    })
    return wallet
  }

}
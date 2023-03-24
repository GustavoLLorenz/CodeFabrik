import { Request, Response } from "express";
import WalletService from "services/WalletService";


export class WalletController {

  async findAll(_req: Request, res: Response) {
    console.log('walletRouter')
    const service = new WalletService();
    const wallets = await service.findAll();
    return res.status(200).json(wallets)
  }

  async createTransaction(req: Request, res: Response) {
    const { id } = req.params
    const {tipo, valor_transacao } = req.body;

    const service = new WalletService();
    const wallets = await service.createTransaction(id, tipo, valor_transacao);

    if(wallets instanceof Error) {
      return res.status(400).json(wallets.message)
    }
    return res.status(200).json(wallets)
  }

}
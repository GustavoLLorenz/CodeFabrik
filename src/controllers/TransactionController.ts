import { TransactionService } from "services/TransactionService";
import { Request, Response } from "express";


export class TransactionController {
  async findAll(req: Request, res: Response) {
    const { carteiraId } = req.params
    if (!carteiraId) {
      return res.status(401).json({message: "ID nao informado."})
    }
    const service = new TransactionService();
    const transaction = await service.findAllByCarteiraId(carteiraId);
    return res.status(200).json(transaction)
  }
}

import { WalletController } from "controllers/WalletController";
import { Router } from "express";


const walletRoutes = Router();

walletRoutes.get("/wallet", new WalletController().findAll)
walletRoutes.post("/wallet/createTransaction/:id", new WalletController().createTransaction)

export { walletRoutes };
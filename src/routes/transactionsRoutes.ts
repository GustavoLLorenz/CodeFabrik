import { TransactionController } from "controllers/TransactionController";

import { Router } from "express";

const transactionsRoutes = Router();

transactionsRoutes.get("/transactions/:carteiraId", new TransactionController().findAll)

export {transactionsRoutes}
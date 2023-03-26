import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser'
var cors = require('cors')

import './database'
// import { routes } from "routes/routes";
import { userRoutes } from "routes/userRoutes";
import { walletRoutes } from "routes/walletRoutes";
import { transactionsRoutes } from "routes/transactionsRoutes";

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes)
app.use(walletRoutes)
app.use(transactionsRoutes)


app.listen(3000 ,() => console.log('server rodando na porta 3000!!!'));
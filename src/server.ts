import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser'

import './database'
// import { routes } from "routes/routes";
import { userRoutes } from "routes/userRoutes";
import { walletRoutes } from "routes/walletRoutes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes)
app.use(walletRoutes)


app.listen(3000 ,() => console.log('server rodando na porta 3000!!!'))
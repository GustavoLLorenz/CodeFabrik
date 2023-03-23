import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser'

import './database'
import { routes } from "routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)

app.listen(3000 ,() => console.log('server rodando!!!ß'))
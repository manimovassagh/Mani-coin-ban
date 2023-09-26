import express from "express";
import { logger } from './config/logger';
import { PORT } from './constants/genesis';
import { blockChainFactory } from './data/blockchain';

const app = express();


const chain = blockChainFactory();
console.log(chain.viewDTO());

app.get("/", (req, res) => {
    res.json(chain.viewDTO())
})


app.listen(PORT, () => {
    logger.info(`Server is running on ${PORT}`)
})




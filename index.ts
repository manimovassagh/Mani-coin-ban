import express from "express";
import { logger } from './config/logger';
import { PORT } from './constants/genesis';
import { blockchainRouter } from "./routers/BlockchainRouter";

const app = express();


app.use(blockchainRouter)

app.listen(PORT, () => {
    logger.info(`Server is running on ${PORT}`)
})




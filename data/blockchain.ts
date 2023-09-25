import { logger } from "../config/logger";
import { Block } from "../models/Block";
import { Blockchain } from "../models/Blockchain";

export type ICreateBlockchain = () => Blockchain;

export const blockChainFactory: ICreateBlockchain = () => {
    logger.info("Blockchain is starting up");
    const createdBlockchain = new Blockchain();
    logger.info("Blockchain is started");

    createdBlockchain.addBlock(new Block(10.12));
    createdBlockchain.addBlock(new Block(20.1));
    createdBlockchain.addBlock(new Block(33.4));
    createdBlockchain.addBlock(new Block(44.56));
    createdBlockchain.isChainValid()


    return createdBlockchain;
}
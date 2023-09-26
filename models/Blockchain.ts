import { logger } from "../config/logger";
import { GENESIS_SECRET_START, hashedGenesisAmount } from "../constants/genesis";
import { Block } from "./Block";



export class Blockchain {
    chain: Block[];
    constructor() {
        this.chain = [this.createGenesisBlock()]
    }


    private createGenesisBlock(): Block {
        return new Block(`Special Genesis amount is ${hashedGenesisAmount}`,
            GENESIS_SECRET_START, true)
    }

    private getLastBlock(): Block {
        return this.chain[this.chain.length - 1];
    }
    public addBlock(newBlock: Block): void {
        newBlock.previousBlockHash = this.getLastBlock().blockHash;
        newBlock.blockHash = newBlock.calculateHash();
        this.chain.push(newBlock);

    }

    public isChainValid(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.blockHash !== currentBlock.calculateHash()) {
                logger.error("Blockchain is not valid");
                return false;
            }

            if (currentBlock.previousBlockHash !== previousBlock.blockHash) {
                logger.error("Blockchain is manipulated and is not acceptable");
                return false;
            }
        }
        logger.info("Blockchain is valid");
        return true;

    }

    viewDTO() {
        return this.chain.map((block: Block, index: number) => {
            return block.toJSON(index + 1)

        })
    }

}
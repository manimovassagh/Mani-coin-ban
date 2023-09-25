import { SHA256 } from "crypto-js";
import { v4 as uuid } from 'uuid';
import { UNIT_CURRENCY } from "../constants/genesis";
import { BlockJsonDTO } from "../types/BlockchainDto";


export class Block {
    public blockHash: string;
    public index: string;
    public unit: string;
    public timestamp: Date;
    public previousHash: string = "";
    public amount: number | string;
    public sequence: number = 1;
    constructor(
        amount: number | string,
        previousHash: string = "",
        public isGenesis: boolean = false

    ) {
        this.isGenesis = isGenesis;
        this.previousHash = previousHash;
        this.amount = amount;
        this.index = uuid();
        this.timestamp = new Date();
        this.blockHash = this.calculateHash();
        this.unit = UNIT_CURRENCY
    }
    calculateHash(): string {
        return SHA256(
            this.index +
            this.previousHash
            + this.timestamp
            + String(this.amount)).toString();
    }


    toJSON(index: number): BlockJsonDTO {
        return {
            blockHash: this.blockHash,
            previousHash: this.previousHash,
            index: this.index,
            timestamp: this.timestamp,
            unit: this.unit,
            amount: this.amount,
            isGenesis: this.isGenesis,
            sequence: index + 1
        };
    }

}


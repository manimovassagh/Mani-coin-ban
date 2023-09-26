import { SHA256 } from "crypto-js";
import { v4 as uuid } from 'uuid';
import { UNIT_CURRENCY } from "../constants/genesis";
import { BlockJsonDTO } from "../types/BlockchainDto";


export class Block {
    public blockHash: string;
    public index: string;
    public unit: string;
    public timestamp: Date;
    public sequence: number = 1;
    constructor(
        public amount: number | string,
        public previousBlockHash: string = "",
        public isGenesis: boolean = false

    ) {
        this.isGenesis = isGenesis;
        this.previousBlockHash = previousBlockHash;
        this.amount = amount;
        this.index = uuid();
        this.timestamp = new Date();
        this.blockHash = this.calculateHash();
        this.unit = UNIT_CURRENCY
    }
    calculateHash(): string {
        return SHA256(
            this.index +
            this.previousBlockHash
            + this.timestamp
            + String(this.amount)).toString();
    }


    toJSON(index: number): BlockJsonDTO {
        return {
            index: this.index,
            sequentialNumber: index,
            blockHash: this.blockHash,
            previousBlockHash: this.previousBlockHash,
            unit: this.unit,
            amount: this.amount,
            timestamp: this.timestamp,
            isGenesis: this.isGenesis,
        };
    }

}


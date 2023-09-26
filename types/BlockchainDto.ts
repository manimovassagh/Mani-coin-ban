import { Blockchain } from "../models/Blockchain";

export type BlockJsonDTO = {
    blockHash: string;
    previousBlockHash: string;
    index: string;
    timestamp: Date;
    unit: string;
    amount: number | string;
    isGenesis: boolean;
    sequenceNumber: number;
  };

  export type ICreateBlockchain = () => Blockchain;
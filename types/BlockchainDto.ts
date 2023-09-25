export type BlockJsonDTO = {
    blockHash: string;
    previousHash: string;
    index: string;
    timestamp: Date;
    unit: string;
    amount: number | string;
    isGenesis: boolean;
    sequence: number;
  };
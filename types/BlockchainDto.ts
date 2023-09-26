export type BlockJsonDTO = {
    blockHash: string;
    previousBlockHash: string;
    index: string;
    timestamp: Date;
    unit: string;
    amount: number | string;
    isGenesis: boolean;
    sequentialNumber: number;
  };
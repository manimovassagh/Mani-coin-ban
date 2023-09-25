import { blockChainFactory } from './data/blockchain';

import { Blockchain } from "./models/Blockchain";


const chain: Blockchain = blockChainFactory()

console.log(chain.viewDTO());








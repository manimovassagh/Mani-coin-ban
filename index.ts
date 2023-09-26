import { blockChainFactory } from './data/blockchain';

import { Blockchain } from "./models/Blockchain";


const chain = blockChainFactory();
console.log(chain.viewDTO());








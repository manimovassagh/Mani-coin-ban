import { logger } from './config/logger';
import { blockChainFactory } from './data/blockchain';



const chain = blockChainFactory();
console.log(chain.chain);







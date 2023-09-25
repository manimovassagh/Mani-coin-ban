import { SHA256 } from "crypto-js"

const GENESIS_AMOUNT = 1_000_000
export const hashedGenesisAmount = SHA256(String(GENESIS_AMOUNT))

export const GENESIS_SECRET_START = (SHA256("Genesis secret starter")).toString()
export const UNIT_CURRENCY = "NGC(next Gen Coin)"

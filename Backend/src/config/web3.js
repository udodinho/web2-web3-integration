"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contract = void 0;
const ethers_1 = require("ethers");
const abi_json_1 = __importDefault(require("../abi/abi.json"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const privateKey = process.env.ACCOUNT_PRIVATE_KEY;
if (!privateKey) {
    throw new Error("PRIVATE_KEY not found in environment variables");
}
const provider = new ethers_1.ethers.JsonRpcProvider(process.env.LISK_RPC_URL);
const contractAddress = process.env.CONTRACT_ADDRESS;
const wallet = new ethers_1.ethers.Wallet(privateKey, provider);
const contract = new ethers_1.ethers.Contract(contractAddress, abi_json_1.default, wallet);
exports.contract = contract;

import { ethers } from "ethers";
import contractAbi from "../abi/abi.json";
import dotenv from 'dotenv';

dotenv.config();

const privateKey = process.env.ACCOUNT_PRIVATE_KEY!;

if (!privateKey) {
    throw new Error("PRIVATE_KEY not found in environment variables");
  }
 
const provider = new ethers.JsonRpcProvider(process.env.LISK_RPC_URL);
const contractAddress = process.env.CONTRACT_ADDRESS!;
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractAbi, wallet);

export { contract };

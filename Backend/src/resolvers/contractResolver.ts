import { Resolver, Query, Mutation, Int } from "type-graphql";
import { contract } from "../config/web3";

@Resolver()
export class ContractResolver {
  @Query(() => String)
  async getCount(): Promise<string> {
    const count = await contract.getCount();
    return count.toString();
  }

  @Mutation(() => String)
  async decrementCount(): Promise<string> {
    const tx = await contract.decrement();
    await tx.wait();
    return `Transaction Hash: ${tx.hash}`;
  }

  @Mutation(() => String)
  async incrementCount(): Promise<string> {
    const tx = await contract.increment();
    await tx.wait();
    return `Transaction Hash: ${tx.hash}`;
  }
}

import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { UserModel } from "../models/User";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    const users = await UserModel.find();
    return users.map((user) => ({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    }));
  }

  @Mutation(() => User)
async addUser(
  @Arg("name", () => String, { nullable: false }) name: string,
  @Arg("email", () => String, { nullable: false }) email: string
): Promise<User> {
  const user = new UserModel({ name, email });
  await user.save();
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
  };
}
}

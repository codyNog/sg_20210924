import { client } from "~/apis";
import { UpdateUserInput, User } from "~/graphql/types";

const getUsers = async (): Promise<User[]> =>
  (await client.getUsers()).data.getUsers;

const getUser = async (uid: string): Promise<User> =>
  (await client.getUser({ uid })).data.getUser;

const updateUser = async (updateUserInput: UpdateUserInput) =>
  (await client.updateUser({ updateUserInput })).data.updateUser;

export const userRequests = {
  getUsers,
  getUser,
  updateUser
};

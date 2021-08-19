import { client } from "~/apis";
import { UpdateUserInput, User, UserItemFragment } from "~/graphql/types";

const getUsers = async (): Promise<User[]> =>
  (await client.getUsers()).data.getUsers;

const getUser = async (uid: string): Promise<User> =>
  (await client.getUser({ uid })).data.getUser;

const getUserList = async (): Promise<UserItemFragment[]> =>
  (await client.getUserList()).data.getUserList;

const updateUser = async (updateUserInput: UpdateUserInput) =>
  (await client.updateUser({ updateUserInput })).data.updateUser;

export const userRequests = {
  getUsers,
  getUser,
  getUserList,
  updateUser
};

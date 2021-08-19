import { userRequests } from "~/apis/user";
import { User } from "~/domain/entity/User";
import { UpdateUserInput } from "~/graphql/types";

const getUsers = async (): Promise<User[]> => {
  const users = await userRequests.getUsers();
  return users;
};

const getUser = async (uid: string): Promise<User> => {
  const user = await userRequests.getUser(uid);
  return user;
};

const getUserList = async () => {
  return await userRequests.getUserList();
};

const updateUser = async (user: User) => {
  const { assets, ...rest } = user;
  const input: UpdateUserInput = {
    ...rest,
    assets: assets.map((elem) => elem.uid)
  };
  await userRequests.updateUser(input);
};

export const userImpl = {
  getUsers,
  getUser,
  getUserList,
  updateUser
};

export type UserUseCase = typeof userImpl;

import {
  GetAssetQuery,
  GetUserListQuery,
  GetUserQuery,
  GetUsersQuery,
  UserItemFragment
} from "~/graphql/types";
import { anAsset, aUser } from "~/mocks/graphql/mock";

const user = aUser({});
const users = [user];

const userList: UserItemFragment[] = users.map((elem) => {
  const { uid, name, age } = elem;
  return { uid, name, age };
});

const userListQuery: GetUserListQuery = {
  getUserList: userList
};

const userQuery: GetUserQuery = {
  getUser: user
};
const usersQuery: GetUsersQuery = {
  getUsers: users
};

const asset = anAsset({ uid: "foo", address: "bar" });

const assetQuery: GetAssetQuery = {
  getAsset: asset
};

export const graphqlMocks = {
  user: {
    user,
    users,
    userList,
    userQuery,
    usersQuery,
    userListQuery
  },
  asset: {
    asset,
    assetQuery
  }
};

import { GetAssetQuery, GetUserQuery, GetUsersQuery } from "~/graphql/types";
import { anAsset, aUser } from "~/mocks/graphql/mock";

const user = aUser({});
const users = [user];

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
    userQuery,
    usersQuery
  },
  asset: {
    asset,
    assetQuery
  }
};

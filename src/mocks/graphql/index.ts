import { GetAssetsQuery } from "~/graphql/types";
import { anAsset } from "./mock";

const asset = anAsset({});
const assets = new Array(3).map(() => anAsset({}));

const getAssetsQuery: GetAssetsQuery = {
  getAssets: assets
};

export const graphqlMocks = { asset: { asset, assets, getAssetsQuery } };

import { client } from "~/apis";

const getAsset = async (uid: string) =>
  (await client.getAsset({ uid })).data.getAsset;

const getAssets = async () => {
  (await client.getAssets()).data.getAssets;
};

export const assetRequests = {
  getAsset,
  getAssets
};

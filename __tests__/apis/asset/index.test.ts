import { assetRequests } from "~/apis/asset";
import { graphqlMocks } from "~/mocks/graphql";
import { startTestServer } from "~/mocks/msw";

describe("assetRequests", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("getAssets", async () => {
    const assets = await assetRequests.getAssets();
    expect(assets).toStrictEqual(graphqlMocks.asset.assets);
  });
});

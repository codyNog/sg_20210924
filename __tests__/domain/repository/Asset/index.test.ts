import { assetImpl } from "~/domain/repository/Asset";
import { graphqlMocks } from "~/mocks/graphql";
import { startTestServer } from "~/mocks/msw";

describe("assetImpl", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("getAssets", async () => {
    const assets = await assetImpl.getAssets();
    expect(assets).toStrictEqual(graphqlMocks.asset.assets);
  });
});

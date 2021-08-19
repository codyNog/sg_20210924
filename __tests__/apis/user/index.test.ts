import { userRequests } from "~/apis/user";
import { graphqlMocks } from "~/mocks/graphql";
import { startTestServer } from "~/mocks/msw";

describe("userRequests", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("getUsers", async () => {
    const users = await userRequests.getUsers();
    expect(users).toStrictEqual(graphqlMocks.user.users);
  });
  it("getUser", async () => {
    const user = await userRequests.getUser("foo");
    expect(user).toStrictEqual(graphqlMocks.user.user);
  });
});

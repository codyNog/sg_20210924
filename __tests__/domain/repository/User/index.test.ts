import { backend } from "~/domain/backend";
import { graphqlMocks } from "~/mocks/graphql";
import { startTestServer } from "~/mocks/msw";

describe("userImpl", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("getUsers", async () => {
    const users = await backend.user.getUsers();
    expect(users).toStrictEqual(graphqlMocks.user.users);
  });

  it("getUsers", async () => {
    const user = await backend.user.getUser("foo");
    expect(user).toStrictEqual(graphqlMocks.user.user);
  });
});

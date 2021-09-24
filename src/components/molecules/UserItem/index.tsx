import styled from "@emotion/styled";
import { UserItemFragment } from "~/graphql/types";

interface Props {
  user: UserItemFragment;
}

const Wrapper = styled.div({
  border: "1px solid black"
});

export const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <Wrapper>
      <div>name: {user.name}</div>
      <div>age: {user.age}</div>
    </Wrapper>
  );
};

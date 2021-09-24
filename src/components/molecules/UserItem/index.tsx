import { User } from "~/graphql/types";
import styled from "@emotion/styled";

interface Props {
  user: User;
}

const Wrapper = styled.div({
  border: "1px solid black"
});

export const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <Wrapper>
      <div>{user.name}</div>
      <div>{user.age}</div>
    </Wrapper>
  );
};

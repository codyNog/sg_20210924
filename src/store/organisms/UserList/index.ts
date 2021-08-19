import useSWR from "swr";
import { backend } from "~/domain/backend";

export const useUserList = () => {
  const { data: users } = useSWR("users", backend.user.getUserList);

  return { users };
};

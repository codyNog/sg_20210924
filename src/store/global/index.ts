import { useUser } from "./User";
import { createContainer } from "unstated-next";

export const useGlobal = () => {
  const userStore = useUser();

  return { userStore };
};

export const GlobalStore = createContainer(useGlobal);

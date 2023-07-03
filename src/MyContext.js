import { createContext, useContext } from "solid-js";

export const MyContext = createContext(["default value", () => {}]);

export function useMyContext() {
  return useContext(MyContext);
}

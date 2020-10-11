import Cookies from "universal-cookie";
import { isEmpty } from "lodash";

export const isLoggedIn = (): boolean => {
  try {
    const cookies: Cookies = new Cookies();
    const session: any = cookies.get("session");
    return !isEmpty(session);
  } catch (err) {
    return false;
  }
};

export const getRole = (): string => {
  const cookies: Cookies = new Cookies();
  const role: string = cookies.get("role");
  return role;
};

export const isBoss = (): boolean => {
  const cookies: Cookies = new Cookies();
  const role: any = cookies.get("role");
  return role === "ADMIN" || role === "TEACHER";
};

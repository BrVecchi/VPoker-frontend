import { Context, createContext, ReactNode } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

interface UserContextType {
  userData: any;
  setUserData: any;
}

const UserContext: Context<UserContextType> = createContext<UserContextType>(
  {} as UserContextType
);
export default UserContext;

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useLocalStorage("userData", {});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

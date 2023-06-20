import React, { createContext, useState, ReactNode } from 'react';


interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  score:number
  users: []; 
}


interface AuthContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  bestScore: number;
  setBestScore: React.Dispatch<React.SetStateAction<number>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  bestScore: 0,
  setBestScore: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [bestScore, setBestScore] = useState<number>(0);

  return (
    <AuthContext.Provider value={{ user, setUser, bestScore, setBestScore }}>
      {children}
    </AuthContext.Provider>
  );
};




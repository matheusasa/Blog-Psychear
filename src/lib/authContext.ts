// authContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

// Definição da interface do usuário
interface User {
  id: string;
  username: string;
}

// Definição da interface para o contexto do usuário
interface UserContextType {
  user: User | null;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

// Criar o contexto de usuário com valores iniciais nulos
const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  login: () => {},
  logout: () => {},
});

// Componente provedor do contexto de usuário
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Efeito para verificar o usuário logado ao inicializar
  useEffect(() => {
    const checkUser = async () => {
      const userFromCookie = Cookies.get('user');
      if (userFromCookie) {
        setUser(JSON.parse(userFromCookie));
      }
      setLoading(false);
    };

    checkUser();
  }, []);

  // Função de login
  const login = (userData: User) => {
    setUser(userData);
    Cookies.set('user', JSON.stringify(userData), { expires: 1 });
    router.push('/'); // Redireciona após o login
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    Cookies.remove('user');
    router.push('/login'); // Redireciona após o logout
  };

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para utilizar o contexto de usuário
export const useUser = () => useContext(UserContext);

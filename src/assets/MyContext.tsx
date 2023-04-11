import { Context, createContext } from 'react';

interface MyContextType {
  // Defina o tipo de dados que você deseja armazenar no contexto aqui
}

const MyContext: Context<MyContextType> = createContext<MyContextType>(
  {} as MyContextType
);

export default MyContext;


import { useState, createContext } from 'react';


export const ProdutoContext = createContext({});

function ProdutoProvider({children}){
  const [produto, setProduto] = useState(null);
  const [anuncio, setAnuncio] = useState(null);

  return(
    <UserContext.Provider value={{ alunos, setAlunos, qtdAlunos }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;


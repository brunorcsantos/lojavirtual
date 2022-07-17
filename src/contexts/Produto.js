import { useState, createContext } from 'react';


export const ProdutoContext = createContext({});

function ProdutoProvider({children}){
  const [produto, setProduto] = useState(null);
  const [anuncio, setAnuncio] = useState(null);

  return(
    <ProdutoContext.Provider value={{ produto, setProduto,  anuncio, setAnuncio }}>
      {children}
    </ProdutoContext.Provider>
  )
}

export default ProdutoProvider;


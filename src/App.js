import RoutesApp from './routes';
import AuthProvider from './contexts/Auth';
import CarrinhoProvider from './contexts/CarrinhoContext';


function App() {
  return (
    <div className="app">
      <AuthProvider>
        <CarrinhoProvider>
        <RoutesApp/>
        </CarrinhoProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

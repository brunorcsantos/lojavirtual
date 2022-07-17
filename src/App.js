import RoutesApp from './routes';
import AuthProvider from './contexts/Auth';


function App() {
  return (
    <div className="app">
      <AuthProvider>
        <RoutesApp/>
      </AuthProvider>
    </div>
  );
}

export default App;

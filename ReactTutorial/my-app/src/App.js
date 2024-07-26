import './App.css';
import ComponentA from './Context/ComponentA';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider value={'Devilliers'}>
        <ComponentA />
      </UserProvider>

    </div>
  );
}

export default App;

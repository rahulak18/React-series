import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './Components/HooksCakeContainer';
import CakeContainer from './Components/CakeContainer';

function App() {
  return (

    <Provider store={store}>
      <HooksCakeContainer />
      <CakeContainer />
    </Provider>
  );
}

export default App;

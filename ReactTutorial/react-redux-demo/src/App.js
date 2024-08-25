import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';

function App() {
  return (

    <Provider store={store}>
      <HooksCakeContainer />
      <IceCreamContainer />
    </Provider>
  );
}

export default App;

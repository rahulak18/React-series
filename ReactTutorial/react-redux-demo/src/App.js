import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (

    <Provider store={store}>
      <UserContainer />
    </Provider>
  );
}

export default App;

import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './Components/HooksCakeContainer';

function App() {
  return (

    <Provider store={store}>
      <HooksCakeContainer />
    </Provider>
  );
}

export default App;

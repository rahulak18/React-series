import './App.css';
import ClickCounter from './Higher-order-components/ClickCounter';
import HoverCounter from './Higher-order-components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name={'dummy1'} />
      <HoverCounter name={'dummy2'} />
    </div>
  );
}

export default App;

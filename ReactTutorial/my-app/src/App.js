import './App.css';
import ClickCounter2 from './Render-Props/ClickCounter2';
import Counter from './Render-Props/Counter';
import HoverCounter2 from './Render-Props/HoverCounter2';

function App() {
  return (
    <div className="App">

      <Counter
        render={(count, incrementCount) => <ClickCounter2 count={count} incrementCount={incrementCount} />}
      />

      <Counter
        render={(count, incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount} />}
      />

    </div>
  );
}

export default App;

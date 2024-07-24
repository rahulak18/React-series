import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Greet name={'Roy'} />
      <Greet name={'Joy'} />
      <Greet name={'Boy'} >
        <p>This is the test case to demonstrate the props children property</p>
      </Greet>
      {/* <Welcome /> */}
    </div>
  );
}

export default App;

import './App.css';
import ErrorBoundary from './Error-boundary/ErrorBoundary';
import Hero from './Error-boundary/Hero';
import PortalDemo from './Portals/PortalDemo';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero name={'Batman'} />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero name={'Superman'} />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero name={'Joker'} />
      </ErrorBoundary>
    </div>
  );
}

export default App;

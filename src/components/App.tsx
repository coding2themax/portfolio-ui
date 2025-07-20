import React from 'react';
import './App.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfolio UI</h1>
        <p>
          Welcome to your React TypeScript application built with Webpack!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;

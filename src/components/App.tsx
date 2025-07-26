import React from 'react';
import Portfolio from './Portfolio';
import './App.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Portfolio
        name="John Doe"
        title="Full Stack Developer"
        email="john.doe@example.com"
        phone="+1 (555) 123-4567"
        location="San Francisco, CA"
        github="https://github.com/johndoe"
        linkedin="https://linkedin.com/in/johndoe"
        website="https://johndoe.dev"
      />
    </div>
  );
};

export default App;

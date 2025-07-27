import React from 'react';
import Portfolio from './Portfolio';
import './App.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Portfolio
        name="Maximilian Quinones"
        title="Senior Consultant & Software Engineer"
        email="maximilian.quinones@gmail.com"
        location="Phoenix, AZ"
        github="https://github.com/coding2themax"
        linkedin="https://www.linkedin.com/in/maximilian-quinones-62603258/"
        website="https://maxquinones.dev"
      />
    </div>
  );
};

export default App;

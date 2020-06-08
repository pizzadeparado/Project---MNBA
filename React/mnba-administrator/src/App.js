import React from 'react';
import './styles/App.css';
import GoogleButton from './components/googleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Administrator Page</title>
        <link rel="icon" href="/favicon.ico"></link>
      </header>
      <div className="container">
        <main>
          <h1 className="title">CdlP Administrator Page</h1>

          <p className="description">Get started by logging in.</p>

          <div className="card">
            <GoogleButton />
          </div>
        </main>

        <footer>Powered by Globant</footer>
      </div>
    </div>
  );
}

export default App;

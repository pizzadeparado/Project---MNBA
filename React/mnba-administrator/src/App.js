import React from 'react';
import './styles/main.css';
import GoogleButton from './components/googleButton';

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1 className="title">Administrador Catedral</h1>

          <p className="description">Para comenzar, iniciá sesión con tu cuenta de Google.</p>

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

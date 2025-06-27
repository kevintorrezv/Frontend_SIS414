import React from 'react';
import './App.css';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import ClienteCRUD from './components/ClienteCRUD';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend de Alojamiento</h1>
      </header>
      <main>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <RegisterPage />
          </div>
          <div style={{ border: '1px solid #ccc', padding: '20px' }}>
            <LoginPage />
          </div>
        </div>
        <hr />
        <div style={{ padding: '20px' }}>
          <ClienteCRUD />
        </div>
      </main>
    </div>
  );
}

export default App;
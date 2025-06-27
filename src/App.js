import React from 'react';
import './App.css'; 

// 1. Importar los componentes a mostrar
//import LoginPage from './components/LoginPage'; 
import HabitacionList from './components/HabitacionList'; 

function App() {
  // 2. En el return, definir la estructura de la página
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Sistema de Gestión de Alojamiento</h1>
      </header>

      <main>
        {/* {}
        <LoginPage /> */}

        {/* Añadimos una línea divisoria para separar visualmente */}
        <hr />

        {/* Mostramos el componente de la lista de habitaciones */}
        <HabitacionList />
      </main>

      <footer className="App-footer">
        <p>Proyecto de Alojamiento - 2025</p>
      </footer>
    </div>
  );
}

export default App;
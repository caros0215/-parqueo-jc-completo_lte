import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import './index.css'; // Asegúrate de importar el CSS global
import { SidebarProvider } from './components/SidebarContext'; // Importa SidebarProvider

const App = () => {
  return (
    <Router>
      <SidebarProvider> {/* Envuelve Routes con SidebarProvider */}
        <Routes />
      </SidebarProvider>
    </Router>
  );
}

export default App;

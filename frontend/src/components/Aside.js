// src/components/Aside.js
import React from 'react';
import { useSidebar } from './SidebarContext';
import profileImage from '../assets/usuarios/admin/191.jpg';
import logoClosedImage from '../assets/plantilla/logo11.png';
import logoOpenImage from '../assets/plantilla/logo_final_2.png';
import './Aside.css'; // Importa el CSS del Sidebar

const Aside = () => {
  const { isOpen } = useSidebar();
  const [isSessionValid, setIsSessionValid] = React.useState(true);

  const sesionString = localStorage.getItem("session");
  const sesion = sesionString ? JSON.parse(sesionString) : null;

  React.useEffect(() => {
    if (!sesion || !sesion.user) {
      console.error("No se encontró la sesión o el usuario en localStorage");
      setIsSessionValid(false);
      return;
    }
  }, [sesion]);

  if (!isSessionValid) {
    return null;
  }

  const perfil = sesion.user.perfil;

  return (
    <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <a href="/inicio" className="brand-link">
        <img src={isOpen ? logoOpenImage : logoClosedImage} alt="Logo" className="image" />
      </a>
      <div className="sidebar">
        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={profileImage} className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">{sesion.user.nombre}</a>
          </div>
        </div> */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {(perfil === "Administrador" || perfil === "Especial" || perfil === "Vendedor") && (
              <>
                <li className="nav-item" title="Inicio">
                  <a href="inicio" className="nav-link">
                    <i className="nav-icon bx bx-home"></i>
                    <p>Inicio</p>
                  </a>
                </li>
                {perfil === "Administrador" && (
                  <li className="nav-item" title="Usuarios">
                    <a href="usuarios" className="nav-link">
                      <i className="nav-icon bx bx-user"></i>
                      <p>Usuarios</p>
                    </a>
                  </li>
                )}
                {(perfil === "Administrador" || perfil === "Especial") && (
                  <>
                    <li className="nav-item" title="Tarifas">
                      <a href="categorias" className="nav-link">
                        <i className="nav-icon bx bx-money"></i>
                        <p>Tarifas</p>
                      </a>
                    </li>
                    <li className="nav-item" title="Ingresos">
                      <a href="productos" className="nav-link">
                        <i className="nav-icon bx bx-trending-up"></i>
                        <p>Ingresos</p>
                      </a>
                    </li>
                    <li className="nav-item" title="Salidas">
                      <a href="salidas" className="nav-link">
                        <i className="nav-icon bx bx-exit"></i>
                        <p>Salidas</p>
                      </a>
                    </li>
                  </>
                )}
                {(perfil === "Administrador" || perfil === "Vendedor") && (
                  <>
                    <li className="nav-item" title="Abonados">
                      <a href="clientes" className="nav-link">
                        <i className="nav-icon bx bx-group"></i>
                        <p>Abonados</p>
                      </a>
                    </li>
                    <li className="nav-item" title="Caja">
                      <a href="cajas" className="nav-link">
                        <i className="nav-icon bx bx-cart"></i>
                        <p>Caja</p>
                      </a>
                    </li>
                    <li className="nav-item" title="Pagos">
                      <a href="crear-venta" className="nav-link">
                        <i className="nav-icon bx bx-dollar"></i>
                        <p>Pagos</p>
                      </a>
                    </li>
                  </>
                )}
                {perfil === "Administrador" && (
                  <li className="nav-item" title="Reporte ventas">
                    <a href="reportes" className="nav-link">
                      <i className="nav-icon bx bx-line-chart"></i>
                      <p>Reporte ventas</p>
                    </a>
                  </li>
                )}
              </>
            )}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;

// src/components/Aside.js
import React from 'react';
import { useSidebar } from './SidebarContext';
import logoClosedImage from '../assets/plantilla/logo11.png';
import logoOpenImage from '../assets/plantilla/logo_final_2.png';
import './Aside.css';

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

  const MenuItem = ({ href, icon, title }) => (
    <li className="nav-item" title={title}>
      <a href={href} className="nav-link">
        <i className={`nav-icon ${icon}`}></i>
        <p>{title}</p>
      </a>
    </li>
  );

  return (
    <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <a href="/inicio" className="brand-link">
        <img 
          src={isOpen ? logoOpenImage : logoClosedImage} 
          alt="Logo" 
          className={`brand-image ${isOpen ? 'logo-open' : 'logo-closed'}`} 
        />
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {(perfil === "Administrador" || perfil === "Especial" || perfil === "Vendedor") && (
              <>
                <MenuItem href="inicio" icon="bx bx-home" title="Inicio" />
                {perfil === "Administrador" && (
                  <MenuItem href="usuarios" icon="bx bx-user" title="Usuarios" />
                )}
                {(perfil === "Administrador" || perfil === "Especial") && (
                  <>
                    <MenuItem href="categorias" icon="bx bx-money" title="Tarifas" />
                    <MenuItem href="productos" icon="bx bx-trending-up" title="Ingresos" />
                    <MenuItem href="salidas" icon="bx bx-exit" title="Salidas" />
                  </>
                )}
                {(perfil === "Administrador" || perfil === "Vendedor") && (
                  <>
                    <MenuItem href="clientes" icon="bx bx-group" title="Abonados" />
                    <MenuItem href="cajas" icon="bx bx-cart" title="Caja" />
                    <MenuItem href="crear-venta" icon="bx bx-dollar" title="Pagos" />
                  </>
                )}
                {perfil === "Administrador" && (
                  <MenuItem href="reportes" icon="bx bx-line-chart" title="Reporte ventas" />
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
import React from 'react';
import { useLocation } from 'react-router-dom';
// Importar los componentes necesarios
import CajasSuperiores from './cajas-superiores';
import GraficoVentas from './reportes/grafico-ventas';
import ProductosMasVendidos from './reportes/ProductosMasVendidos';
import ProductosRecientes from './productos-recientes';
import Header from '../components/Header';

const Tablero = () => {

  const location = useLocation();
  const sessionData=  localStorage.getItem('session');
  const data = sessionData ? JSON.parse(sessionData) : null;
  
  console.log('Tablero', data);

  if (!data || !data.user) {
    return <div>Error: datos no disponibles</div>;
  }
  return (

    <div className="content-wrapper">

      <section className="content-header" style={{ color: 'white', backgroundColor: 'black' }}>
        <h1 className="tablero-title">
          Tablero
          <small style={{ color: 'white' }}>Panel de Control</small>
        </h1>

        <ol className="breadcrumb">
          <li><a href="inicio"><i className="fa fa-dashboard"></i> Inicio</a></li>
          <li className="active" style={{ color: 'white' }}>Tablero</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          {data.user.perfil === "Administrador" && (
            <CajasSuperiores />
          )}
        </div>

        <div className="row">
          <div className="col-lg-12">
            {data === "Administrador" && (
              <GraficoVentas />
            )}
          </div>

          <div className="col-lg-6">
            {data === "Administrador" && (
              <ProductosMasVendidos />
            )}
          </div>

          <div className="col-lg-6">
            {data.user.perfil === "Administrador" && (
              <ProductosRecientes />
            )}
          </div>

          <div className="col-lg-12">
            {(data === "Especial" || data === "Vendedor") && (
              <div className="box box-success">
                <div className="box-header">
                  <h1>Bienvenid@ {data.user.nombre}</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tablero;

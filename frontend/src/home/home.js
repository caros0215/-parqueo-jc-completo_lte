// import React, { useState, useEffect } from 'react';
// import { Route, Switch, useLocation } from 'react-router-dom';
// import Cabezote from './componentes/Cabezote';
// import Menu from './componentes/Menu';
// import Footer from './componentes/Footer';

// // Importa tus componentes de contenido
// import Inicio from './componentes/Inicio';
// import Usuarios from './componentes/Usuarios';
// import Categorias from './componentes/Categorias';
// import Productos from './componentes/Productos';
// import Salidas from './componentes/Salidas';
// import Clientes from './componentes/Clientes';
// import Ventas from './componentes/Ventas';
// import CrearVenta from './componentes/CrearVenta';
// import EditarVenta from './componentes/EditarVenta';
// import Reportes from './componentes/Reportes';
// import NotFound from './componentes/NotFound';

// const Home = () => {
//     const [sesionIniciada, setSesionIniciada] = useState(false);
//     const [cargando, setCargando] = useState(true);
//     const location = useLocation();
  
//     useEffect(() => {
//       // Verificar si la sesión está iniciada
//       const verificarSesion = async () => {
//         try {
//           // Aquí deberías hacer una llamada a tu API para verificar el token
//           const token = localStorage.getItem('token');
//           // Ejemplo de verificación (reemplaza esto con tu lógica real de verificación)
//           if (token) {
//             setSesionIniciada(true);
//           } else {
//             setSesionIniciada(false);
//           }
//         } catch (error) {
//           console.error('Error al verificar la sesión:', error);
//           setSesionIniciada(false);
//         } finally {
//           setCargando(false);
//         }
//       };
  
//       verificarSesion();
//     }, []);
  
//     // Mostrar un indicador de carga mientras se verifica la sesión
//     if (cargando) {
//       return <div>Cargando...</div>;
//     }
  
//     // Opción 1: Mostrar el componente Login directamente
//     if (!sesionIniciada) {
//       return <login />;
//     }
  
//     // Opción 2: Redirigir a la página de login
//     // if (!sesionIniciada) {
//     //   return <Redirect to="/login" />;
//     // }
  
//     return (
//       <div className="wrapper hold-transition skin-blue sidebar-collapse sidebar-mini">
//         <Cabezote />
//         <Menu />
//         <div className="content-wrapper">
//           <Switch>
//             <Route exact path="/home" component={Inicio} />
//             <Route path="/home/usuarios" component={Usuarios} />
//             <Route path="/home/categorias" component={Categorias} />
//             <Route path="/home/productos" component={Productos} />
//             <Route path="/home/salidas" component={Salidas} />
//             <Route path="/home/clientes" component={Clientes} />
//             <Route path="/home/ventas" component={Ventas} />
//             <Route path="/home/crear-venta" component={CrearVenta} />
//             <Route path="/home/editar-venta" component={EditarVenta} />
//             <Route path="/home/reportes" component={Reportes} />
//             <Route component={NotFound} />
//           </Switch>
//         </div>
//         <Footer />
//       </div>
//     );
//   };
  
//   export default Home;
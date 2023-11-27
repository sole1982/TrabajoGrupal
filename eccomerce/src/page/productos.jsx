import React from 'react';
import TarjetaProducto from '../component/TarjetaProducto';


const Productos = () => {
  const listaDeArticulos = [
    { id: 1, nombre: 'Remeras', precio: '$10' },
    { id: 2, nombre: 'Gorras', precio: '$20' },
    { id: 3, nombre: 'Pantalones', precio: '$30' },
    
  
  ];

  return (
    <><div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '20%'}}>
      <h1 className="text-8xl font-serif mb-8 italic">Productos</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        {listaDeArticulos.map((articulo) => (
        <div key={articulo.id} className='mb-8 mx-64'>
          <TarjetaProducto articulo={articulo}/>   
        </div> 
        ))}
      </div>
    </div>
    </>
  );
};

export default Productos;

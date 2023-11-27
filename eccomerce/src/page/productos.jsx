import React from 'react';
import TarjetaProducto from '../component/TarjetaProducto';


const Productos = () => {
  const listaDeArticulos = [
    { id: 1, nombre: 'Remera', precio: '$10' },
    { id: 2, nombre: 'Pantalon', precio: '$20' },
    { id: 3, nombre: 'Pullover', precio: '$30' },
    
   
  ];

  return (
    <>
      <h1 className="text-8xl text-center align-middle font-serif m-0 p-0 italic">Productos</h1>
      <div className="ml-20 mt-10 grid grid-flow-col justify-stretch m-0 p-20">
        {listaDeArticulos.map((articulo) => (
          <TarjetaProducto key={articulo.id} articulo={articulo} />
        ))}
      </div>

   
    </>
  );
};

export default Productos;

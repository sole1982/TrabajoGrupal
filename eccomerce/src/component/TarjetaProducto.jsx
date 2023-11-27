// TarjetaProducto.js
import React from 'react';
import Imagenes from './Imagen';
import Articulos from './Articulos';
import { useState } from 'react';
import "../styles/TarjetaProducto.css"

const TarjetaProducto = ({ articulo }) => {
  const [texto, setTexto] = useState("Comprar");

  const CompraClick = () => {
    alert("Próximamente abrimos");
  };

  return (
    <>
      {/* Código de la tarjeta en universe.io*/}
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
          
            <Imagenes  />
            <Articulos
              nombre={articulo.nombre}
              precio={articulo.precio}
            />
          </div>
          <div className="backSide">
            <p className="title">PRECIO $::::</p>
            <p>Descripcion</p>
            <p>SKU</p>
            <p>Stok</p>
            <button
              className="bg-slate-200 inset-x-0 bottom-0 h-19 rounded-lg"
              type="button"
              onClick={CompraClick}
            >
              {texto}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TarjetaProducto;

import React, { useState } from 'react';
import FormInicioSesion from '../component/FormInicioSesion';
import FormRegister from '../component/FormRegister';

const iniciarSesion = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div style={{paddingBottom: '20%'}}>
      {isLoginFormVisible ? (
        <FormInicioSesion onSignUpClick={toggleForm} />
      ) : (
        <FormRegister onSignInClick={toggleForm} />
      )}
    </div>
  );
};

export default iniciarSesion;

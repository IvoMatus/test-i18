import React from 'react';
import { Link } from 'react-router-dom';
import LoginImage from '../Asset/img/login.jpg'
import SubCargo from '../Asset/img/subcargo_blanco.png'
import { useTranslation } from 'react-i18next';

function Login() {
    const [t, i18n] = useTranslation();

  return (
    <div className="h-screen flex" style={{backgroundImage:`url(${LoginImage})`,backgroundSize:'cover'}}>
      <div className="w-1/4 m-4 sm:w-1/4 sm:mx-auto rounded my-auto">
            {/* <h2 className=" p-4 pl-16 text-5xl font-bold text-azul text-left">
                  SUBCARGO
            </h2>   */}
            <img src={SubCargo} className="w-11/12 mx-auto " /> 
            <div className="text-white text-center mx-auto flex flex-row justify-center text-sm">
              {t('subtitle')}
            </div>
            <div className="mt-8">
                <div className="m-2 font-bold">  </div>
                <input className="w-full m-2 p-1 border-b-2 border-solid border-white bg-transparent text-white" value={null} onChange={null} type="text" placeholder="Rut Empresa/Persona Natural (XXXXXXXX-X)"/> 
            </div>
            <div className="mt-8">
                <div className="m-2 font-bold">  </div>
                <input className="w-full m-2 p-1 border-b-2 border-solid border-white bg-transparent text-white" onKeyPress={null} onChange={null} type="password" placeholder="Contraseña"/> 
            </div>    
            <div className="mt-8">
                <input type="checkbox"
                id="check_trabajador" 
                className="m-2"
                // className="w-full m-2 p-1 border-b-2 border-solid border-white bg-transparent text-white" 
                checked={null}
                onChange={()=>null}/> 
                <label for="check_trabajador" className="m-2 text-white"> Entrar como trabajador </label>
            </div>   
            <div className="text-rojo w-full flex justify-end text-sm my-4 cursor-pointer">
            
              ¿Olvidaste contraseña?
            
            </div>   
            <button className=" m-2 bg-rojo text-white font-bold rounded-lg p-2 w-full" onClick={null} >
              INGRESAR
            </button>
            <div className="text-white text-center mx-auto flex flex-row justify-center text-sm my-4">
              {/* ¿No tienes cuenta? <div className="text-rojo cursor-pointer"> &nbsp;Registrate como Cliente </div> */}
            
                ¿No tienes cuenta? <div className="text-rojo cursor-pointer underline"> &nbsp;Registrate como Cliente </div>
            
            </div>
            <div className="text-white text-center mx-auto flex flex-row justify-center text-sm my-4">
              {/* ¿No tienes cuenta? <div className="text-rojo cursor-pointer"> &nbsp;Registrate como Cliente </div> */}
             
                ¿No tienes cuenta? <div className="text-rojo cursor-pointer underline"> &nbsp;Registrate como Persona Natural </div>
            
            </div>
            <div className="text-white text-center mx-auto flex flex-row justify-center text-sm my-4">
              {/* ¿No tienes cuenta? <div className="text-rojo cursor-pointer"> &nbsp;Registrate como Cliente </div> */}
              
                ¿No tienes cuenta? <div className="text-rojo cursor-pointer underline"> &nbsp;Registrate como Transportista </div>
              
            </div>

            <div className="text-white text-center mx-auto flex flex-row justify-center mt-16 text-xs">
              Desarrollado por Subcargo
            </div>
            {/* <button
            onClick={()=>{
              console.log("rut: ",rut)
            }}
            >click</button> */}
          </div>
    </div>
  );
}

export default Login;

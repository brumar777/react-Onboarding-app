import React from 'react';
import './style.css';
import { useState } from 'react';

const clasePasajero = ['FirstClass', 'Business', 'Turista', 'Economy'];

export default function App() {
  //genero mis option, a partir de mi array
  let clases = clasePasajero.map((clase) => (
    <option value={clase}>{clase}</option>
  ));

  //genero mi useState
  const [misClientes, useMisClientes] = useState([]);

  //genero otro duplicado
  const masClientes = misClientes.slice(0, misClientes.length);

  //Recibo los datos y los actulizo con useState(masClientes)
  const enviarRegistro = () => {
    let nuevoDni = document.getElementById('dni').value;
    let nuevoNombre = document.getElementById('nombre').value;
    let nuevoApelllido = document.getElementById('apellido').value;
    let nuevaClase = document.getElementById('clasesParaViajar').value;
    let nuevaButaca = document.getElementById('butaca').value;

    masClientes.push({
      dni: nuevoDni,
      nombre: nuevoNombre,
      apellido: nuevoApelllido,
      clase: nuevaClase,
      butaca: nuevaButaca,
    });

    useMisClientes(masClientes);
  };
  //borro el registro de misClientes y lo reseteo. Ademas limpio la fila del html
  const borrarUltimoRegristro = () => {
    misClientes.pop();
    useMisClientes(misClientes);

    let miTabla = document.getElementById('tablaRegistro');
    let cantindadDeFilasDeTabla = miTabla.rows.length; //Cuento las filas de mi tabla

    if (cantindadDeFilasDeTabla > 1) {
      //solo dejo el selecciones clase
      miTabla.deleteRow(cantindadDeFilasDeTabla - 1);
    }
  };

  //genero las tablas de los registros
  const tablaRegistro = misClientes.map((c) => (
    <tr id={c.clase}>
      <td>{c.dni} </td>
      <td>{c.nombre} </td>
      <td>{c.apellido} </td>
      <td>{c.clase} </td>
      <td>{c.butaca} </td>
    </tr>
  ));

  return (
    <div className="registro">
      <h1>Onboarding App</h1>
      <h2>Registro de Pasajeros</h2>

      <input type="number" id="dni" placeholder="DNI" />
      <br />
      <br />

      <input type="text" id="nombre" placeholder="Nombre" />
      <br />
      <br />

      <input type="text" id="apellido" placeholder="Apellido" />
      <br />
      <br />
      <input type="text" id="butaca" maxLength="5" placeholder="Butaca" />
      <br />
      <br />
      <select id="clasesParaViajar">
        <option value="0">Seleccione Clase</option>
        {clases}
      </select>
      <br />
      <br />
      <button onClick={enviarRegistro}>Enviar registro</button>
      <button
        onClick={borrarUltimoRegristro}
        style={{ backgroundColor: '#FDFD96' }}
      >
        Borrar último registro
      </button>

      <br />
      <br />
      <table id="tablaRegistro" maxLength="3">
        <tr>
          <th>DNI</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Clase</th>
          <th>Butaca</th>
        </tr>
        {tablaRegistro}
      </table>
    </div>
  );
}

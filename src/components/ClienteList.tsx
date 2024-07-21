import React, { useEffect, useState } from 'react';
import { getClientes, deleteCliente } from './api.js';
import Swal from 'sweetalert2';

const ClienteList = ({ onEdit }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    const response = await getClientes();
    setClientes(response.data);
  };

  const handleDelete = async (id) => {
    await deleteCliente(id);
    Swal.fire('Deleted!', 'Cliente has been deleted.', 'success');
    fetchClientes();
  };

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}>
            {cliente.nome} - {cliente.email}
            <button onClick={() => onEdit(cliente)}>Edit</button>
            <button onClick={() => handleDelete(cliente.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;

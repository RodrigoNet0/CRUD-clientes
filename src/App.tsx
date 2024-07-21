import React, { useState } from 'react';
import ClienteForm from './components/ClienteForm';
import ClienteList from './components/ClienteList';

const App = () => {
  const [clienteToEdit, setClienteToEdit] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (cliente: React.SetStateAction<null>) => {
    setClienteToEdit(cliente);
  };

  const handleSuccess = () => {
    setRefresh(!refresh);
    setClienteToEdit(null);
  };

  return (
    <div>
      <h1>CRUD Clientes</h1>
      <ClienteForm cliente={clienteToEdit} onSuccess={handleSuccess} />
      <ClienteList onEdit={handleEdit} key={refresh} />
    </div>
  );
};

export default App;

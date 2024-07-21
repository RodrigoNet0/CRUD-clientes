import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // base url
});

export const getClientes = () => api.get('/clientes');
export const createCliente = (data) => api.post('/clientes', data);
export const updateCliente = (id, data) => api.put(`/clientes/${id}`, data);
export const deleteCliente = (id) => api.delete(`/clientes/${id}`);

export default api;

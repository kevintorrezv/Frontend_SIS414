import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClienteCRUD() {
    const [clientes, setClientes] = useState([]);
    const [error, setError] = useState('');

    // Función para obtener la lista de clientes
    const fetchClientes = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Necesitas iniciar sesión para ver los clientes.');
            return;
        }
        try {
            const response = await axios.get('http://localhost:8080/api/v1/clientes', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setClientes(response.data);
            setError('');
        } catch (error) {
            console.error('Error al obtener clientes:', error);
            setError('No se pudieron cargar los clientes. Tu sesión puede haber expirado.');
        }
    };
    
    // useEffect para cargar los clientes cuando el componente aparece
    useEffect(() => {
        fetchClientes();
    }, []);
    
    // Función para borrar un cliente
    const handleDelete = async (clienteId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Sesión expirada.');
            return;
        }
        if (window.confirm(`¿Estás seguro de que quieres borrar al cliente con ID ${clienteId}?`)) {
            try {
                await axios.delete(`http://localhost:8080/api/v1/clientes/${clienteId}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                alert('Cliente borrado con éxito.');
                // Volvemos a cargar la lista para que se actualice
                fetchClientes(); 
            } catch (error) {
                console.error('Error al borrar cliente:', error);
                alert('Error al borrar el cliente.');
            }
        }
    };

    return (
        <div>
            <h2>CRUD de Clientes</h2>
            <button onClick={fetchClientes}>Actualizar Lista</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table border="1" style={{ width: '100%', marginTop: '10px' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.email}</td>
                            <td>
                                <button onClick={() => handleDelete(cliente.id)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClienteCRUD;
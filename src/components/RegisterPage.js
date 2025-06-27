import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Hacemos la petición POST a nuestro endpoint de registro
            const response = await axios.post('http://localhost:8080/auth/register', formData);
            setMessage(`¡Usuario registrado con éxito! Tu token es: ${response.data.token}`);
        } catch (error) {
            console.error('Error en el registro:', error);
            setMessage('Error en el registro. El email puede que ya esté en uso.');
        }
    };

    return (
        <div>
            <h2>Registrar Nuevo Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstname" placeholder="Nombre" onChange={handleChange} required />
                <input type="text" name="lastname" placeholder="Apellido" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
                <button type="submit">Registrar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default RegisterPage;
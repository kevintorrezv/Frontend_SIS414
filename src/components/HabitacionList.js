import React, { useEffect, useState } from "react";

function HabitacionList() {
    const [habitaciones, setHabitaciones] = useState([]);

    useEffect(() => {

        // 1.TOKEN VÁLIDO DE POSTMAN 
        // Este token expirará en 1 hora. Si deja de funcionar se debe reemplazar.
        const miToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUb3JyZXpAY29ycmVvLmNvbSIsImlhdCI6MTc1MTA0NDIzNiwiZXhwIjoxNzUxMDQ3ODM2fQ.65Qzux1sK3SZskQjHmvAqleYYTYPlyTJdsRck_4KCjk';
        
        const headers = { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${miToken}` // Construimos la cabecera
        };

        // 2. HACEMOS LA PETICIÓN CON FETCH AL ENDPOINT DE HABITACIONES
        fetch("http://localhost:8080/habitaciones", { headers })
            .then(res => res.json())
            .then(data => {
                // Guardamos los datos recibidos en el estado 'habitaciones'
                setHabitaciones(data);
            })
            .catch(err => {
                // Manejo de errores simple
                console.log("Error al obtener habitaciones: ", err);
            });
        
    }, []);

    return (
        <div>
            <h2>Lista de Habitaciones</h2>
            <ul>
                {habitaciones.map(habitacion => (
                    <li key={habitacion.id}>
                        {}
                        N°: {habitacion.numero} - Tipo: {habitacion.tipo} - Precio: ${habitacion.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HabitacionList;
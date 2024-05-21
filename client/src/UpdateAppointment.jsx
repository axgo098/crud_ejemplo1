import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function UpdateAppointment() {
    const { id } = useParams();
    const [petName, setPetName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/getAppointment/${id}`)
            .then(result => {
                console.log(result);
                setPetName(result.data.petName);
                setOwnerName(result.data.ownerName);
                setAppointmentDate(result.data.appointmentDate);
            })
            .catch(err => console.log(err));
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/updateAppointment/${id}`, { petName, ownerName, appointmentDate })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Actualizar Cita Veterinaria</h2>
                    <div className="mb-2">
                        <label htmlFor="petName">Nombre de la Mascota</label>
                        <input type="text" placeholder="Ingrese el Nombre de la Mascota" className="form-control"
                            value={petName} onChange={(e) => setPetName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="ownerName">Nombre del Propietario</label>
                        <input type="text" placeholder="Ingrese el Nombre del Propietario" className="form-control"
                            value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="appointmentDate">Fecha de la Cita</label>
                        <input type="date" className="form-control"
                            value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success">Actualizar</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateAppointment;

import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function CreateAppointment() {
    const { id } = useParams();
    const [petName, setPetName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createAppointment", { petName, ownerName, appointmentDate })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Registrar Cita Veterinaria</h2>
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
                    <button type="submit" className="btn mb-2 btn-success">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default CreateAppointment;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Appointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setAppointments(result.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteAppointment/${id}`)
        .then(res => {
            console.log(res);
            setAppointments(appointments.filter(appointment => appointment._id !== id));
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to={"/createAppointment"} className='btn btn-success btn-lg'>Agregar Cita</Link>
                <table className="table table-striped text-capitalize">
                    <thead className="table-dark">
                        <tr>
                            <th>Nombre Mascota</th>
                            <th>Propietario</th>
                            <th>Fecha de Cita</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment) => {
                                return (
                                    <tr key={appointment._id}>
                                        <td>{appointment.petName}</td>
                                        <td>{appointment.ownerName}</td>
                                        <td>{appointment.appointmentDate}</td>
                                        <td>
                                            <Link to={`/updateAppointment/${appointment._id}`} className='btn btn-success'>Actualizar</Link>
                                            <button className="btn btn-danger" 
                                            onClick={(e) => handleDelete(appointment._id)}>Borrar</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Appointments;

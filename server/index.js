const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AppointmentModel = require('./models/Appointments'); // Cambio de UserModel a AppointmentModel

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get('/', (req, res) => { 
    AppointmentModel.find({})
    .then(appointments => res.json(appointments))
    .catch(err => res.json(err))
});

app.get('/getAppointment/:id', (req, res) => { // Cambio de ruta '/getUser/:id' a '/getAppointment/:id'
    const id = req.params.id;
    AppointmentModel.findById({_id: id})
    .then(appointment => res.json(appointment))
    .catch(err => res.json(err))
});

app.put('/updateAppointment/:id', (req, res) => { 
    const id = req.params.id;
    AppointmentModel.findByIdAndUpdate({_id: id}, {
        petName: req.body.petName,
        ownerName: req.body.ownerName,
        appointmentDate: req.body.appointmentDate
    })
    .then(appointment => res.json(appointment))
    .catch(err => res.json(err))
});

app.delete('/deleteAppointment/:id', (req, res) =>{ 
    const id = req.params.id;
    AppointmentModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.post("/createAppointment", (req, res) => { 
    AppointmentModel.create(req.body)
    .then(appointment => res.json(appointment))
    .catch(err => res.json(err))
});

app.listen(3001, () => {
    console.log("Servidor funcionando");
});

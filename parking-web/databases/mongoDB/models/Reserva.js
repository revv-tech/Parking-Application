const { model, Schema} = require('mongoose');

const reservaEsquema = new Schema({
    idReserva: {
        type:Number,
        index: true
    },
    idHorario: String,
    identificacion: String,
    idEstacionamiento: Number
});

modeloReserva = model('Reserva',reservaEsquema,'Reservas');

modeloReserva.createIndexes()
    .then(() => console.log("Reserva model indexes created"))
    .catch((err) => console.log("Reserva model indexes error " +err));

module.exports = modeloReserva;
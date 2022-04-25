const { model, Schema} = require('mongoose');

const bitacoraEsquema = new Schema({
    idReservaHistorial: {
        type:Number,
        index: true
    },
    inicioReserva: Date,
    finReserva: Date,
    diaReserva: String,
    tipoFuncionario: Boolean
});

modeloBitacora = model('Historial',bitacoraEsquema,'Bitacora');

modeloBitacora.createIndexes()
    .then(() => console.log("Bitacora model indexes created"))
    .catch((err) => console.log("Bitacora model indexes error " +err));

module.exports = modeloBitacora;
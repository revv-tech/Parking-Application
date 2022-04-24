const { model, Schema} = require('mongoose');

const espacioEsquema = new Schema({
    idEspacio: {
        type:Number,
        index: true
    },
    numeroEspacio: Number,
    tipo: String,
    placaReserva: String,
    reservado: Boolean,
    idEstacionamiento: Number
});

modeloEspacio = model('Espacio',espacioEsquema,'Espacios');

modeloEspacio.createIndexes()
    .then(() => console.log("Espacio model indexes created"))
    .catch((err) => console.log("Espacio model indexes error " +err));

module.exports = modeloEspacio;
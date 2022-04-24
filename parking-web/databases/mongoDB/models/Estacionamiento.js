const { model, Schema} = require('mongoose');

const estacionamientoEsquema = new Schema({
    idEstacionamiento: {
        type:Number,
        index: true
    },
    ubicacion: String,
    nombre: String,
    espaciosTotal: Number,
    tipo: String,
    espaciosDisponibles: Number,
    espaciosComunes:Number,
    espaciosOficiales:Number,
    espaciosEspeciales:Number,
    imagen: String
});

modeloEstacionamiento = model('Estacionamiento',estacionamientoEsquema,'Estacionamientos');

modeloEstacionamiento.createIndexes()
    .then(() => console.log("Estacionamiento model indexes created"))
    .catch((err) => console.log("Estacionamiento model indexes error " +err));

module.exports = modeloEstacionamiento;
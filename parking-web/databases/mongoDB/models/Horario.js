const { model, Schema} = require('mongoose');

const horarioEsquema = new Schema({
    idHorario: {
        type:Number,
        index: true
    },
    identificacion: Number,
    dia: String,
    inicio: Date,
    fin: Date,
    tipo: String
});

modeloHorario = model('Horario',horarioEsquema,'Horarios');

modeloHorario.createIndexes()
    .then(() => console.log("Horario model indexes created"))
    .catch((err) => console.log("Horario model indexes error " +err));

module.exports = modeloHorario;
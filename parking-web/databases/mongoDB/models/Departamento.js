const { model, Schema} = require('mongoose');

const departamentoEsquema = new Schema({
    codigo: {
        type:String,
        index: true
    },
    descripcion: String,
    tipo: String
    });

modeloDepartamento = model('Departamento',departamentoEsquema,'Departamentos');

modeloDepartamento.createIndexes()
    .then(() => console.log("Departamento model indexes created"))
    .catch((err) => console.log("Departamento model indexes error " +err));

module.exports = modeloDepartamento;
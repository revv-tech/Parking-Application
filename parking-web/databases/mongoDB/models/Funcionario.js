const { model, Schema} = require('mongoose');

const funcionarioEsquema = new Schema({
    identificacion: {
        type:Number,
        index: true
    },
    nombreCompleto: String,
    codigo: String,
    correoAlterno: String,
    necesidadEspecial: Boolean,
    correoInstitucional: String,
    vehiculos:Array,
    contraseña:String,
    tipoUsuario:String,
    campus:String,
    tipo: String
});

modeloFuncionario = model('Funcionario',funcionarioEsquema,'Funcionarios');

modeloFuncionario.createIndexes()
    .then(() => console.log("Funcionario model indexes created"))
    .catch((err) => console.log("Funcionario model indexes error " +err));

module.exports = modeloFuncionario;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Funcionario = require("../mongoDB/models/Funcionario");
const Bitacora = require("../mongoDB/models/Bitacora");
const Departamento = require("../mongoDB/models/Departamento");
const Espacio = require("../mongoDB/models/Espacio");
const Estacionamiento = require("../mongoDB/models/Estacionamiento");
const Horario = require("../mongoDB/models/Horario");
const Reserva = require("../mongoDB/models/Reserva");
const {uploadImage} = require("../../databases/cloudinary/connection");

const encryptPassword = async (password) => {
    try {
        const generatedSalt = await bcrypt.genSalt(saltRounds);
        const encryptedPassword = await bcrypt.hash(password, generatedSalt);

        // return {generatedSalt, encryptedPassword}
        return encryptedPassword;
    }
    catch (err) {
        throw Error(err);
    }
}

module.exports = {
    getAllDepartamentos: async () => {
        let departamentos =  await Departamento.find();
        return departamentos;
    },
    getAllFuncionarios: async () => {
        let funcionarios = await Funcionario.find();
        return funcionarios;
    },
    getAllEstacionamientos: async () => {
        let estacionamientos = await Estacionamiento.find();
        return estacionamientos;
    },
    getHistorial: async () => {
        let historial = await Bitacora.find();
        return Bitacora;
    },
    newUser: async (datos) => {
        let user = await Funcionario.findOne({"identificacion" : datos.identificacion});
        console.log(user);
        if(await user) throw new Error("Ya existe un usuario con esta identificacion");
        if((await Funcionario.exists({
            "correoInstitucional" : datos.correoInstitucional
        }))) throw new Error("Ya existe un usuario con este correo institucional");
        const usuario = new Funcionario({
            identificacion: datos.identificacion,
            nombreCompleto: datos.nombreCompleto,
            codigo: datos.codigo,
            correoAlterno: datos.correoAlterno,
            necesidadEspecial: datos.necesidadEspecial,
            correoInstitucional:datos.correoInstitucional,
            vehiculos:datos.vehiculos,
            contraseña:await encryptPassword(datos.contraseña),
            tipoUsuario:datos.tipoUsuario,
            campus:datos.campus,
            tipo: datos.tipo
        });
        await usuario.save();
        console.log("usuario creado");
        return datos.identificacion;
    }
}

const dbConnectors = require('../../databases')

const {getAllDepartamentos, newUser, getAllFuncionarios} = require("../mongoDB/funciones")

async function main(){
    await dbConnectors.connectMongoDB();
    const departamentos = await getAllDepartamentos();
    console.log("mostrando departamentos...");
    console.log(await departamentos);
    const id = await newUser({
        "identificacion": 150188800,
        "nombreCompleto":"Marcelino Herrera",
        "codigo":"EL",
        "correoAlterno":"veunneicreprufri-7026@yopmail.com",
        "necesidadEspecial": false,
        "correoInstitucional":"marcelinoherrera@courriel.fr.nf",
        "tipo":"JEFATURA",
        "vehiculos": ["0354 YAX","4370 EAW"],
        "tipoUsuario": "COMUN",
        "contraseña": "usuarioPrueba0",
        "celular":54721042,
        "campus": "SAN_JOSE"
    });
    console.log(id);
}

main()
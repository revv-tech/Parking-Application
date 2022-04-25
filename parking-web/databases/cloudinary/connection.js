const {reject} = require("bcrypt/promises");
const stream = require("stream");
const { CLOUDINARY_URL } = process.env;
const cloudinary = require('cloudinary').v2;

function manageImageUpload (stream, folder, identifier, width, height){
    return new Promise((resolve, reject) => {
        const cloudUploadStream = cloudinary.uploader.upload_stream(
            {
                public_id: folder+"/"+identifier,
                overwrite: true,
                width,
                height,
                crop: "fill",
            },
            (err, res)=>{
                if (err) {
                    reject(err);
                }
                if(res){
                    resolve(res);
                }
            }
        );

        stream.pipe(cloudUploadStream);
    })
}

function manageVideoUpload (stream, folder, identifier){
    return new Promise((resolve, reject) => {
        const cloudUploadStream = cloudinary.uploader.upload_stream(
            {
                public_id: folder+"/"+identifier,
                overwrite: true,
                resource_type: 'video'
            },
            (err, res)=>{
                if (err) {
                    reject(err);
                }
                if(res){
                    resolve(res);
                }
            }
        );

        stream.pipe(cloudUploadStream);
    })
}

module.exports = {
    uploadImage : async (fileStream, folder, identifier, w = undefined, h = undefined) => {
        const {secure_url} = await manageImageUpload(fileStream, folder, identifier, w, h);
        console.log('secure_url')
        console.log(secure_url)
        return secure_url;
    },
    uploadVideo: async (fileStream, folder, identifier) =>{
        try {
            const {secure_url} = await manageVideoUpload(fileStream, folder, identifier);
            return secure_url
        }catch (e){
            console.log(e);
        }
    }
}
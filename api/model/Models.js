import mongoose from 'mongoose';

const usuarioSchema = mongoose.Schema(
    {
        id: {type: String},
        login: {type: String, required: true},
        senha: {type: String, required: true},
        tipo: {type: String},
        situacao: {type: String},
        nome: {type: String},
        serial: {type: String},
        credito: {type: mongoose.Schema.Types.ObjectId, ref: 'credito'},
        dataUltimoLogin: {type: String},
        teste: {type: String},
        control: {type: String}
    }
)

const usuarios = mongoose.model('usuarios', usuarioSchema);

export { usuarios };
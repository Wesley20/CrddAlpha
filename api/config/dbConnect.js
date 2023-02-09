import mongoose from "mongoose"

mongoose.connect("mongodb+srv://AdmTDI:AdmTDI@cluster0.vv4iqzl.mongodb.net/BancoTDI")

let db = mongoose.connection;

export default db
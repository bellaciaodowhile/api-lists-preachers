import dbClient from "../config/dbClient.js";

class userModel {
    async create(user) {
        const colUser = dbClient.db.collection('users')

        const existingUser = await colUser.findOne({ email: user.email });

        if (existingUser) {
            console.log('Este usuario ya existe!')
            return {status: false, message: 'Este correo ya está registrado'}
        }

        return {
            status: true,
            data: await colUser.insertOne(user),
            message: 'Usuario creado correctamente'
        }
    }
    async login(user) {
        const colUser = dbClient.db.collection('users')

        const existingUser = await colUser.findOne({ email: user.email, password: user.password });

        if (existingUser) {
            console.log('Este usuario ya existe!')
            return {status: true, message: 'Sesión iniciada', data: existingUser}
        }

        return {
            status: false,
            message: 'Verifique sus credenciales'
        }
    }
}
export default new userModel();
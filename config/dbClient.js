import { MongoClient } from "mongodb";

class dbClient {
    constructor() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=ListsPreachers`
        this.client = new MongoClient(queryString);
        this.connectDB();
    }

    async connectDB() {

        try {
            await this.client.connect()
            this.db = this.client.db('ListsPreachers');
            console.log('Conectado a la BD')
        } catch (error) {
            console.log(error)
        }
        
    }
}
export default new dbClient()
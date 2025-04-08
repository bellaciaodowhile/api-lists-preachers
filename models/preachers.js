import dbClient from "../config/dbClient.js";

class preacherModel {
    async create(preacher) {
        const colPreachers = dbClient.db.collection('preachers')
        return {
            data: await colPreachers.insertOne(preacher),
            status: true
        }
    }
    async findAll() {
        const preachers = dbClient.db.collection('preachers')
        return {
            data: await preachers.find({}, { projection: { _id: 0 } }).toArray(),
            status: true
        }
    }
}

export default new preacherModel()
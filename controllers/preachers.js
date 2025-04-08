import preacherModel from '../models/preachers.js'

class preacherController {
    constructor() {
        
    }

    async create(req, res) {
        try {
            const data = await preacherModel.create(req.body);
            await res.status(201).json(data)
        } catch (error) {
            res.status(500).json({status: 'ERROR'})
        }
    }
    async update(req, res) {
        try {
            res.status(201).json({status: 'UPDATE-OK'})
        } catch (error) {
            res.status(500).json({status: 'ERROR'})
        }
    }
    async delete(req, res) {
        try {
            res.status(201).json({status: 'DELETE-OK'})
        } catch (error) {
            res.status(500).json({status: 'ERROR'})
        }
    }
    async getAll(req, res) {
        try {
            const data = await preacherModel.findAll();
            await res.status(201).json(data)
        } catch (error) {
            res.status(500).json({status: 'ERROR'})
        }
    }
    async getOne(req, res) {
        try {
            res.status(201).json({status: 'GETONE-OK'})
        } catch (error) {
            res.status(500).json({status: 'ERROR'})
        }
    }

}
export default new preacherController();
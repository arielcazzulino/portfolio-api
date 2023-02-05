import express from 'express';
import getProjects from '../controllers/getProjects.controller.js';

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const listProjects = await getProjects();
        return res.status(200).send(listProjects)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}) 

export default router;
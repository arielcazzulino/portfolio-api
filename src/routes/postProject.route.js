import express from 'express';
import { Project } from '../models/Project.js';
import { Type } from '../models/Type.js';

const router = express.Router();

router.post('/', async (req, res)=>{
    try {
        let {
            tittle,
            description,
            type,
            image
        } = req.body
    
        let projectCreate = await Project.create({
            tittle,
            description,
            image
        })
    
        let associatedType = await Type.findAll({
            where: { work: type},
        })
        
        projectCreate.addType(associatedType);
        console.log(projectCreate)
        res.status(200).send(projectCreate)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default router;
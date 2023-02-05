import express from 'express';
import { Project } from '../models/Project.js';

const router = express.Router();

router.delete('/:id', async (req, res)=>{
    try {
        let {id} = req.params;
        await Project.destroy({
            where: {id : id}
        })
        res.status(200).json({msg:'Project deleted succesfull'})   
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default router;
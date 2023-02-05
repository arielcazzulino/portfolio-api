import express from 'express';
import { Project } from '../models/Project.js';

const router = express.Router();

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { tittle, description, image } = req.body;
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await project.update({ tittle, description, image });

    return res.json({ project });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;

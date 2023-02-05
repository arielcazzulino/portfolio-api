import { Router } from 'express';
import getProjects from './getProjects.route.js';
import postProject from './postProject.route.js';
import deletProject from './deleteProject.route.js';
import updateProject from './putProject.route.js';
import sendEmail from './sendEmail.route.js'

const router = Router();

router.use('/projects', getProjects, postProject, deletProject, updateProject);
router.use('/sendemail', sendEmail);

export default router;
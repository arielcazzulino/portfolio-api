import { Project } from '../models/Project.js';
import { Type } from '../models/Type.js';

const getProjects = async () => {
    let projects = await Project.findAll({    
        include: {
            model: Type,                    // de este tipo, quiero que me traiga el nombre (work)
            attributes: ['work'],           // le indico que me traiga el nombre
            through: { attributes: [] }     // sobre la tabla de atributos - Es una comprobación que va siempre
        }
    })
    
    return projects
}

export default getProjects;
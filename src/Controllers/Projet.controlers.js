import { where } from 'sequelize';
import {Project} from '../Models/Projects.js';
import { Task } from '../Models/Task.js';

export const getProjets = async (req, res) => {
    try {
        const projects = await Project.findAll();
         res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProjet = async (req, res) => {
    try {
        const {id} = req.params;
        const project = await Project.findOne({
            where:{
                id
            }
        });
        if(!project) return res.status(404).json({ message: "Project doesn't exist" });
        res.json(project);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createProjets = async (req, res) => {
    const { name, priority, description } = req.body;
   
    try {
        const newProjet = await Project.create({
        name,
        priority,
        description
    })
    
   res.json(newProjet);
    }catch (error) {
        res.status(500).json({ message: error.message });
    
    }
}

export const updateProjets = async (req, res) => {
    try {
    const {id} = req.params;
    const { name, priority, description } = req.body;

    const projet = await Project.findByPk(id);
    projet.name = name;
    projet.priority = priority;
    projet.description = description;
    await projet.save();

    res.json(projet);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const deleteProjets = async (req, res) => {
    try {
     const { id } = req.params;
     await Project.destroy({
        where: {
            id
        }
      });

       res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getProjetTasks = async (req, res) => {
    const { id } = req.params;
    const tasks = await Task.findAll({
        where: {
            projectId: id
        }
        
    });
    res.json(tasks);
}
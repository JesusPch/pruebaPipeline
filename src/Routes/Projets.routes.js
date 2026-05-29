import { Router } from "express";
import { createProjets,
         getProjets,
         getProjet,
         updateProjets,
         deleteProjets,
         getProjetTasks } from "../Controllers/Projet.controlers.js";

const router = Router();

router.get("/projects", getProjets);
router.post("/projects", createProjets);
router.put("/projects/:id", updateProjets);
router.delete("/projects/:id", deleteProjets);
router.get("/projects/:id", getProjet);

router.get("/projects/:id/tasks", getProjetTasks);

export default router;
import { Router } from "express";   
import { getTasks,
     createTasks,
     updateTask,
     deleteTask,
     getTask } from "../Controllers/tasks.controlers.js";

const router = Router();


router.get("/tasks", getTasks);
router.post("/tasks", createTasks);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks/:id", getTask);
export default router;
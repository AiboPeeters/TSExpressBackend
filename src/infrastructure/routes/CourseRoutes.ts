import express, { Request, Response } from "express";
import { CourseService } from "../../application/services/CourseService";

const router = express.Router();
const courseService = new CourseService();

router.get("/", async (_req: Request, res: Response) => {
    try {
        const courses = await courseService.getAll();
        res.json(courses);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const course = await courseService.getById(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.json(course);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});

export default router;

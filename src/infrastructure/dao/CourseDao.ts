import { ICourse } from "../../domain/interfaces/ICourse";
import { Course } from "../../domain/entities/Course";

export class CourseDao {
    async getAll(): Promise<ICourse[]> {
        return await Course.find();
    }

    async getById(id: string): Promise<ICourse | null> {
        return await Course.findById(id);
    }
}

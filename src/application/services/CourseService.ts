import { CourseDao } from "../../infrastructure/dao/CourseDao";
import { ICourse } from "../../domain/interfaces/ICourse";

export class CourseService {
    private dao: CourseDao;

    constructor() {
        this.dao = new CourseDao();
    }

    async getAll(): Promise<ICourse[]> {
        return await this.dao.getAll();
    }

    async getById(id: string): Promise<ICourse | null> {
        return await this.dao.getById(id);
    }
}

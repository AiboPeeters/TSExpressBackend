import { Schema, model } from "mongoose";
import { ICourse } from "../interfaces/ICourse";

const CourseSchema = new Schema<ICourse>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        durationYears: { type: Number, required: true },
        location: { type: String, required: true },
    },
    { collection: "Course", versionKey: false }
);

export const Course = model<ICourse>("Course", CourseSchema);

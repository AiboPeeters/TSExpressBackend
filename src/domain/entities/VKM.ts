import { Schema, model } from "mongoose";
import { IVKM } from "../interfaces/IVKM";
import { ICourse } from "../interfaces/ICourse";

const CourseEmbeddedSchema = new Schema<ICourse>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    durationYears: { type: Number, required: true },
    location: { type: String, required: true },
}, { _id: false });

const VKMSchema = new Schema<IVKM>({
    name: { type: String, required: true },
    shortdescription: { type: String },
    description: { type: String },
    content: { type: String },
    studycredit: { type: Number },
    location: { type: String },
    level: { type: String },
    learningoutcomes: { type: String },
    module_tags: { type: String },
    available_spots: { type: Number },
    start_date: { type: Date },
    language: { type: String },
    period: { type: String },
    course: { type: CourseEmbeddedSchema, required: true }
}, { collection: "VKM", versionKey: false });

export const VKM = model<IVKM>("VKM", VKMSchema);

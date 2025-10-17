import { IVKM } from "../../domain/interfaces/IVKM";
import { VKM } from "../../domain/entities/VKM";

export class VKMDao {
    async getAll(): Promise<IVKM[]> {
        return VKM.find().exec();
    }

    async getById(id: string): Promise<IVKM | null> {
        return VKM.findById(id).exec();
    }

    async create(data: Partial<IVKM>): Promise<IVKM> {
        const vkm = new VKM(data);
        return vkm.save();
    }

    async update(id: string, data: Partial<IVKM>): Promise<IVKM | null> {
        return VKM.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async delete(id: string): Promise<IVKM | null> {
        return VKM.findByIdAndDelete(id).exec();
    }
}

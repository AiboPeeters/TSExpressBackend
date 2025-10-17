import { VKMDao } from '../../infrastructure/dao/VKMDao';
import { IVKM } from '../../domain/interfaces/IVKM';

export class VKMService {
    private dao = new VKMDao();

    getAllVKMs() {
        return this.dao.getAll();
    }

    getVKMById(id: string) {
        return this.dao.getById(id);
    }

    createVKM(data: Partial<IVKM>) {
        return this.dao.create(data);
    }

    updateVKM(id: string, data: Partial<IVKM>) {
        return this.dao.update(id, data);
    }

    deleteVKM(id: string) {
        return this.dao.delete(id);
    }
}

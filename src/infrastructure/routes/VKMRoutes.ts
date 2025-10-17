import express from 'express';
import { VKMService } from '../../application/services/VKMService';

const router = express.Router();
const service = new VKMService();

// Alle VKMs
router.get('/', async (req, res) => {
    const vkms = await service.getAllVKMs();
    res.json(vkms);
});

// VKM op MongoDB _id
router.get('/:id', async (req, res) => {
    const vkm = await service.getVKMById(req.params.id);
    res.json(vkm);
});

// Nieuwe VKM toevoegen
router.post('/', async (req, res) => {
    const newVKM = await service.createVKM(req.body);
    res.status(201).json(newVKM);
});

// VKM updaten
router.put('/:id', async (req, res) => {
    const updated = await service.updateVKM(req.params.id, req.body);
    res.json(updated);
});

// VKM verwijderen
router.delete('/:id', async (req, res) => {
    await service.deleteVKM(req.params.id);
    res.status(204).send();
});

export default router;

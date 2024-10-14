import Maintenance from '../models/maintenance.js';

export const store = async (req, res) => {
try {
    const maintenance = new Maintenance(req.body);
    await maintenance.save();
    res.status(201).json(maintenance);
} catch (error) {
    res.status(400).json({ error: 'Erro ao criar maintenance' });
}
};

export const index = async (req, res) => {
try {
    const maintenance = await Maintenance.find();
    res.status(200).json(maintenance);
} catch (error) {
    res.status(400).json({ error: 'Erro ao buscar autors' });
}
};

export const show = async (req, res) => {
try {
    const maintenance = await Maintenance.findById(req.params.id);
    res.status(200).json(maintenance);
} catch (error) {
    res.status(404).json({ error: 'Maintenance não encontrado' });
}
};

export const update = async (req, res) => {
try {
    const maintenance = await Maintenance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(maintenance);
} catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar maintenance' });
}
};

export const destroy = async (req, res) => {
try {
    await Maintenance.findByIdAndDelete(req.params.id);
    res.status(204).json();
} catch (error) {
    res.status(400).json({ error: 'Erro ao deletar maintenance' });
}
};
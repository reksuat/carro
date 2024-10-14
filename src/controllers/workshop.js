import Workshop from '../models/workshop.js';

export const store = async (req, res) => {
try {
    const workshop = new Workshop(req.body);
    await workshop.save();
    res.status(201).json(workshop);
} catch (error) {
    res.status(400).json({ error: 'Erro ao criar workshop' });
}
};

export const index = async (req, res) => {
try {
    const workshop = await Workshop.find();
    res.status(200).json(workshop);
} catch (error) {
    res.status(400).json({ error: 'Erro ao buscar autors' });
}
};

export const show = async (req, res) => {
try {
    const workshop = await Workshop.findById(req.params.id);
    res.status(200).json(workshop);
} catch (error) {
    res.status(404).json({ error: 'Workshop não encontrado' });
}
};

export const update = async (req, res) => {
try {
    const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(workshop);
} catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar workshop' });
}
};

export const destroy = async (req, res) => {
try {
    await Workshop.findByIdAndDelete(req.params.id);
    res.status(204).json();
} catch (error) {
    res.status(400).json({ error: 'Erro ao deletar workshop' });
}
};
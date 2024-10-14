import Vehicle from '../models/vehicle.js';

export const store = async (req, res) => {
try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
} catch (error) {
    res.status(400).json({ error: 'Erro ao criar vehicle' });
}
};

export const index = async (req, res) => {
try {
    const vehicle = await Vehicle.find();
    res.status(200).json(vehicle);
} catch (error) {
    res.status(400).json({ error: 'Erro ao buscar autors' });
}
};

export const show = async (req, res) => {
try {
    const vehicle = await Vehicle.findById(req.params.id);
    res.status(200).json(vehicle);
} catch (error) {
    res.status(404).json({ error: 'Vehicle não encontrado' });
}
};

export const update = async (req, res) => {
try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(vehicle);
} catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar vehicle' });
}
};

export const destroy = async (req, res) => {
try {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.status(204).json();
} catch (error) {
    res.status(400).json({ error: 'Erro ao deletar vehicle' });
}
};
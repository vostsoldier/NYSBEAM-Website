const EventRegistration = require('../models/EventRegistration');

exports.registerForEvent = async (req, res) => {
    const { eventId } = req.body;
    const userId = req.user.id;

    if (!eventId) {
        return res.status(400).json({ message: 'Event ID is required' });
    }

    try {
        const existingRegistration = await EventRegistration.findOne({ where: { eventId, userId } });
        if (existingRegistration) {
            return res.status(400).json({ message: 'You have already registered for this event' });
        }

        await EventRegistration.create({ eventId, userId });
        res.status(201).json({ message: 'Registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
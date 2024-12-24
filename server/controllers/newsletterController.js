const Newsletter = require('../models/Newsletter');

exports.subscribe = async (req, res) => {
    const { email } = req.body;

    try {
        const existing = await Newsletter.findOne({ where: { email } });
        if (existing) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        const subscription = await Newsletter.create({ email });
        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
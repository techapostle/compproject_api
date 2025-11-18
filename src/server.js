require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const LOCAL_IP_ADDRESS = process.env.LOCAL_IP_ADDRESS || '127.0.0.1';
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.status(200).json({ status: 'API is running' });
});

app.get('/api/user/profile', (req, res) => {
    const id = req.query.id;
    if (!id) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    // Mock user data
    const userProfile = {
        id: id,
        name: 'John Doe',
        email: 'john.doe@example.com'
    };

    res.status(200).json(userProfile);
});

app.listen(PORT, LOCAL_IP_ADDRESS, () => {
    console.log(`API Server is listening at http://${LOCAL_IP_ADDRESS}:${PORT}`);
});
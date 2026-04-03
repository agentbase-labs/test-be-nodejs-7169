const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
app.get('/health', (req, res) => res.json({ status: 'ok', framework: 'express' }));
app.get('/', (req, res) => res.json({ message: 'Express Works!' }));
app.listen(PORT, '0.0.0.0', () => console.log(`Server on port ${PORT}`));
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Test Route
app.get('/', (req, res) => {
    res.json({ status: "Success", message: "Custom Backend is running smoothly!" });
});

// AI Prompt Processing Route (Aap yahan OpenAI/Claude API integrate karenge)
app.post('/api/run-task', async (req, res) => {
    try {
        const { prompt, user_id } = req.body;
        
        // Yahan aap apna custom logic ya Google APIs / AI call likhenge
        console.log(`Processing prompt for user ${user_id}: ${prompt}`);

        res.json({ 
            success: true, 
            result: "Task completed successfully by your custom backend!" 
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

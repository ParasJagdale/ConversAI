// 
import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

// Middleware to parse JSON
app.use(express.json());

// POST /test endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/test', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required in the request body.' });
  }

  try {
    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ]
      })
    });

    const data = await response.json();

    const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      return res.status(500).json({ error: 'No response from Gemini API.' });
    }

    res.json({ reply: generatedText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch from Gemini API.' });
  }
  fetch('http://localhost:3000/test', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: "You are a coding assistant that talks like a pirate. Tell me a joke related to Computer Science."
  })
})
  .then(res => res.json())
  .then(data => {
    console.log('Response:', data.reply);
  })
  .catch(err => console.error('Error:', err));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

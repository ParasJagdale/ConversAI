import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

const app = express();
const port = 3000;

// Needed to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, '../Frontend')));

// Gemini setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// POST /test
app.post('/test', async (req, res) => {
  try {
    const { prompt } = req.body;

    const systemPrompt = `
    You are a compassionate and encouraging AI mentor for students. 
    Your goal is to help them share their worries about studies, exams, placements, or career uncertainty.
    Always respond with empathy, practical advice, and positivity.
    Avoid overly technical jargon unless they ask for it.
    `;

    const result = await model.generateContent(systemPrompt + "\nStudent: " + prompt);
    const text = result.response.text();

    res.json({ reply: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});

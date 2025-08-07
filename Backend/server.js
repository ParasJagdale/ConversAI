import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateResponse() {
  try {
    // Get the gemini-1.5-flash model (latest available model)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "You are a coding assistant that talks like a pirate. Tell me a joke related to Computer Science.";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log(text);
  } catch (error) {
    console.error('Error generating response:', error);
  }
}

generateResponse();
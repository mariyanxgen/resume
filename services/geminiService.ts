import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MARIYA_DATA } from "../constants";

// Prepare context string from resume data
const RESUME_CONTEXT = `
You are an AI assistant representing Mariya Johnson, a Data Scientist and AI Engineer.
Use the following resume data to answer questions about Mariya's experience, skills, and background.
Be professional, concise, and helpful. If a question is not related to her professional life, politely steer the conversation back to her skills and experience.

RESUME DATA:
Name: ${MARIYA_DATA.name}
Role: ${MARIYA_DATA.role}
Summary: ${MARIYA_DATA.summary}

Skills:
${MARIYA_DATA.skills.map(cat => `- ${cat.category}: ${cat.items.join(', ')}`).join('\n')}

Experience:
${MARIYA_DATA.experience.map(exp => `
- Company: ${exp.company}
- Role: ${exp.role}
- Period: ${exp.period}
- Details: ${exp.description.join(' ')}
`).join('\n')}

Education:
${MARIYA_DATA.education.map(edu => `- ${edu.degree} at ${edu.institution} (${edu.year})`).join('\n')}

Certifications:
${MARIYA_DATA.certifications.join(', ')}

Strengths:
${MARIYA_DATA.strengths.join(', ')}

Contact Info:
Email: ${MARIYA_DATA.email}
Phone: ${MARIYA_DATA.phone}
Location: ${MARIYA_DATA.location}
LinkedIn: ${MARIYA_DATA.linkedin}
GitHub: ${MARIYA_DATA.github}
`;

export const generateResponse = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        return "I'm sorry, I can't connect to my brain right now (API Key missing). Please contact Mariya directly via email.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-2.5-flash as it is efficient for text tasks
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: RESUME_CONTEXT,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary error. Please try asking again.";
  }
};
import { addResourceTool, getInformationTool, runSqlTool } from '@/lib/ai/tools';
import { openai } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText} from 'ai';

import fs from 'fs';
import path from 'path';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
/**
 * Handles a POST request by reading a prompt from a text file, converting the request body to core messages,
 * and invoking the appropriate tools to generate a response. The response is returned as an AI stream response.
 *
 * @param {Request} req - The request object containing the request body.
 * @return {Promise<Response>} A promise that resolves to an AI stream response.
 */
  const { messages } = await req.json();

  // Read the prompt from the text file
  const promptPath = path.join(process.cwd(), 'prompts', 'assistantPrompt.txt');
  const system = fs.readFileSync(promptPath, 'utf8');

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system,
    messages: convertToCoreMessages(messages),
    tools: {
      AddKnowledge: addResourceTool,
      SearchKnowledgeBase: getInformationTool,
      RunDatabaseQuery: runSqlTool,
    },
  });

  return result.toAIStreamResponse();
}

import { addResourceTool, getInformationTool, runSqlTool } from '@/lib/ai/tools';
import { openai } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText} from 'ai';

import fs from 'fs';
import { run } from 'node:test';
import path from 'path';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Read the prompt from the text file
  const promptPath = path.join(process.cwd(), 'prompts', 'assistantPrompt.txt');
  const system = fs.readFileSync(promptPath, 'utf8');

  const result = await streamText({
    model: openai('gpt-4o'),
    system,
    messages: convertToCoreMessages(messages),
    tools: {
      addResource: addResourceTool,
      getInformation: getInformationTool,
      runSql: runSqlTool,
    },
  });

  return result.toAIStreamResponse();
}

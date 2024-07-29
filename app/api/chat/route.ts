import { createResource } from '@/lib/actions/resources';
import { openai } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText, tool } from 'ai';
import { z } from 'zod';
import { findRelevantContent } from '@/lib/ai/embedding';

import fs from 'fs';
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
        addResource: tool({
            description: `add a resource to your knowledge base.
            If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,
            parameters: z.object({
            content: z
                .string()
                .describe('the content or resource to add to the knowledge base'),
            }),
            execute: async ({ content }) => createResource({ content }),
        }),
        getInformation: tool({
            description: `get information from your knowledge base to answer questions.`,
            parameters: z.object({
              question: z.string().describe('the users question'),
            }),
            execute: async ({ question }) => findRelevantContent(question),
        }),
    },
  });

  return result.toAIStreamResponse();
}

import { tool } from 'ai';
import { z } from 'zod';
import { createResource } from '@/lib/actions/resources';
import { findRelevantContent } from '@/lib/ai/embedding';
import { query_postgres_raw } from '@/lib/db/index';

export const addResourceTool = tool({
    description: `add a resource to your knowledge base.
    If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,
    parameters: z.object({
    content: z
        .string()
        .describe('the content or resource to add to the knowledge base'),
    }),
    execute: async ({ content }) => createResource({ content }),
});

export const getInformationTool = tool({
    description: `get information from your knowledge base to answer questions.`,
    parameters: z.object({
      question: z.string().describe('the users question'),
    }),
    execute: async ({ question }) => findRelevantContent(question),
});

export const runSqlTool = tool({
    description: `Get realtime information by running a raw SQL command. If information doesn't exist in the knowledge base, use this tool to query the database directly.`,
    parameters: z.object({
      sqlCommand: z.string().describe('The raw SQL command to run'),
    }),
    execute: async ({ sqlCommand }) => {
      try {
        console.log(`Running SQL command: ${sqlCommand}`);
        const dbResult = await query_postgres_raw(sqlCommand);
        const sql_result = JSON.stringify(dbResult.rows || 'No result');
        return { sql_result };
      } catch (error) {
        console.error('Error running SQL command:', error);
        return { sql_result: 'Error executing SQL command' };
      }
    },
});
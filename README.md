# AI Search Bar

This is a chatbot application powered by Vector Search + Text2SQL.
It is built using the Vercel AI SDK and Retrieval-Augmented Generation (RAG). 
The chatbot is built using the following stack:

- [Next.js](https://nextjs.org) 14 (App Router)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [OpenAI](https://openai.com)
- [Drizzle ORM](https://orm.drizzle.team)
- [Postgres](https://www.postgresql.org/) with [pgvector](https://github.com/pgvector/pgvector)
- [shadcn-ui](https://ui.shadcn.com) and [TailwindCSS](https://tailwindcss.com) for styling

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/zarifaziz/ai-answer-engine.git # Vercel AI SDK RAG Guide Starter Project
```

This is the starter project for the Vercel AI SDK [Retrieval-Augmented Generation (RAG) guide](https://sdk.vercel.ai/docs/guides/rag-chatbot).

In this project, you will build a chatbot that will only respond with information that it has within its knowledge base. The chatbot will be able to both store and retrieve information. This project has many interesting use cases from customer support through to building your own second brain!

This project will use the following stack:

- [Next.js](https://nextjs.org) 14 (App Router)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [OpenAI](https://openai.com)
- [Drizzle ORM](https://orm.drizzle.team)
- [Postgres](https://www.postgresql.org/) with [ pgvector ](https://github.com/pgvector/pgvector)
- [shadcn-ui](https://ui.shadcn.com) and [TailwindCSS](https://tailwindcss.com) for styling

2. Install dependencies:

```
cd ai-answer-engine
pnpm install
```

3. Start the development server:

```
pnpm run dev
```

4. Open `http://localhost:3000` with your browser to see the chatbot in action

## Features

- Retrieval-Augmented Generation (RAG): The chatbot uses the Vercel AI SDK's RAG guide to generate responses based on the information it has in its knowledge base.
- Vector Search: The chatbot uses pgvector to perform vector search on the knowledge base, allowing it to quickly find relevant information.
- Text2SQL: The chatbot uses the Text2SQL tool from the Vercel AI SDK to generate SQL queries based on user input, allowing it to retrieve information from the knowledge base.

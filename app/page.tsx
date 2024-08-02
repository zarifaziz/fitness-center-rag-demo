'use client';

import { useChat } from 'ai/react';
import Head from 'next/head';
import Inter from 'next/font/google';
import styles from '@/styles/Home.module.css';


export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxToolRoundtrips: 4,
  });

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className="space-y-4 mb-4">
          {messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap">
              <div className={styles.message}>
                <div className="font-bold">{m.role}</div>
                <p>
                  {m.content.length > 0 ? (
                    m.content
                  ) : (
                    <span className="italic font-light">
                      {'calling tool: ' + m?.toolInvocations?.map(tool => tool.toolName).join(', ')}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
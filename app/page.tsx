'use client';

import { useChat } from 'ai/react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxToolRoundtrips: 4,
  });

  return (
    <>
      <Head>
        <title>AI Search Bar</title>
        <meta
          name="description"
          content="An answer engine for your company queries. Powered by advanced AI technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <h1 className="text-center text-6xl font-bold py-2">AI Search Bar</h1>
          <h4 className="text-center text-4xl font-semibold py-2">Powered by Vector Search + Text2SQL</h4>
        </div>

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

        <form onSubmit={handleSubmit} className={inter.className}>
          <input
            id="myInput"
            name="myInput"
            className={`inline-block ml-4 ${styles.input} ${inter.className} bg-transparent`}
            value={input}
            placeholder="Ask me anything..."
            onChange={handleInputChange}
          />
        </form>

        <div className="py-8 w-full flex items-center justify-center space-x-6">
          <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
            <Link href="https://supabase.com" className="flex items-center justify-center">
              <p className="text-base mr-2">Built by Zarif Aziz</p>
            </Link>
          </div>
          <div className="border-l border-gray-300 w-1 h-4" />
          <div className="flex items-center justify-center space-x-4">
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
              <Link
                href="https://github.com/zarifaziz"
                className="flex items-center justify-center"
              >
                <Image src={'/github.svg'} width="20" height="20" alt="Github logo" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
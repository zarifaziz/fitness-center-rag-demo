import fs from 'fs';
import path from 'path';
import { createResource } from './actions/resources';

async function addToKnowledgeBase() {
  // Read the large text document
  const textPath = path.join(process.cwd(), 'data', 'fitness_center_info.txt');
  const largeText = fs.readFileSync(textPath, 'utf8');

  // Add the large text to the knowledge base
  await createResource({ content: largeText });

  console.log('Large text document added to knowledge base.');
}

addToKnowledgeBase().catch(console.error);
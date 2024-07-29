import fs from 'fs';
import path from 'path';
import { createResource } from './actions/resources';

async function addToKnowledgeBase() {
  try {
    // Read the large text document
    const textPath = path.join(process.cwd(), 'data', 'fitness_center_info.txt');
    const largeText = fs.readFileSync(textPath, 'utf8');

    // Add the large text to the knowledge base
    await createResource({ content: largeText });

  } catch (error) {
    console.error('Error adding to knowledge base:', error);
  }
}

addToKnowledgeBase().catch(console.error);
export const sectionBasedChunking = (input: string): string[] => {
    // Define the section headers
    const headers = ['Overview', 'Contact Information', 'Membership Plans', 'Facilities', 'Fitness Classes', 'Personal Training', 'Member Services', 'Events and Promotions', 'Frequently Asked Questions (FAQs)'];
  
    // Initialize an empty array to store the chunks
    let chunks: string[] = [];
  
    // Iterate over the headers
    for (let i = 0; i < headers.length - 1; i++) {
      // Split the text into chunks based on the headers
      const start = input.indexOf(headers[i]) + headers[i].length;
      const end = input.indexOf(headers[i + 1]);
      const chunk = input.slice(start, end).trim();
      chunks.push(chunk);
    }
  
    // Add the last section to the chunks
    const start = input.indexOf(headers[headers.length - 1]) + headers[headers.length - 1].length;
    chunks.push(input.slice(start).trim());
  
    console.log(`sectionBasedChunking: all chunks added`);
    console.log(`sectionBasedChunking: number of chunks: ${chunks.length}`);
    return chunks;
};

export const basicChunking = (input: string): string[] => {
    return input
      .trim()
      .split('.') // only using '.' causes URLS to be clipped
      .filter(i => i !== '');
};
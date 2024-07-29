import { query_postgres_raw } from './db/index';

async function testQuery() {
  const text = 'SELECT * FROM staff ORDER BY staff.hire_date DESC;';
  
  const result = await query_postgres_raw(text);
  
  console.log(result);
}

testQuery();
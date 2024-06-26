import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + '?sslmode=require',
});

pool.connect((err: any) => {
  if (err) throw err;
  console.log('Connect to PostgreSQL successfully!');
});

module.exports = pool;

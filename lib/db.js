import mysql from 'mysql2/promise';

let connection;

export async function getConnection() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'tep-me-fcs.tep.thai.Seagate.com',
      port: Number(process.env.MYSQL_PORT || 3306),
      user: process.env.MYSQL_USER || 'mfg_user',
      password: process.env.MYSQL_PASSWORD || 'seagate1234',
      database: process.env.MYSQL_DATABASE || 'mfg',
    });
  }

  return connection;
}

export async function closeConnection() {
  if (connection) {
    await connection.end();
    connection = null;
  }
}

export async function query(sql, params = []) {
  const conn = await getConnection();
  const [rows] = await conn.execute(sql, params);
  return rows;
}

export async function getTransactions(limit = 10) {
  return query('SELECT * FROM ztransaction LIMIT ?', [limit]);
}
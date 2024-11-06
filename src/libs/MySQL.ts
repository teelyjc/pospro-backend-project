import mysql from "mysql2/promise";

export const createMySqlConnectionPool = () => {
  return mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "password",
    database: "app"
  })
};

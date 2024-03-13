import mysql from 'mysql2'
import * as dotenv from 'dotenv'
dotenv.config()

export const db = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    database: process.env.DB_NAME,
    password: process.env.DB_PWD,
    port: 3306,
    connectionLimit: 5
})
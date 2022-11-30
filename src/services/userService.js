import db from "../database/connection.js";

async function checkExistingUser(nickname, email) {
    const conn = await db.connect()
    const sql = 'SELECT * FROM Users WHERE nickname =? OR email =?'

    const [rows] = await conn.query(sql, [nickname, email])
    conn.end()

    return rows // return rows.length > 0
}

async function createUser(nickname, email, password, birthday) {
    const conn = await db.connect()
    const sql = 'INSERT INTO Users(nickname, email, password, birthday) VALUES(?, ?, ?, ?)'
    const data = [nickname, email, password, birthday]

    await conn.query(sql, data)
    conn.end()
}

async function login(email) {
    const conn = await db.connect()
    const sql = 'SELECT * FROM Users WHERE email =?'

    const row = await conn.query(sql, [email])
    conn.end()

    return row[0]
}

export default { createUser, checkExistingUser, login }
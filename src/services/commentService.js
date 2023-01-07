import db from '../database/connection.js'

async function createComment(comment, user_id, post_id) {
    const conn = await db.connect()
    const sql = 'INSERT INTO Comments(comment, user_id, post_id) VALUES(?, ?, ?)'
    const data = [comment, user_id, post_id]
    await conn.query(sql, data)
    conn.end()
}

async function getCommentsOfPost(post_id) {
    const conn = await db.connect()
    const sql = 'SELECT id, comment, created_at, (SELECT nickname FROM Users WHERE id = c.user_id) AS nickname, (SELECT profileImage FROM Profile p WHERE p.user_id = c.user_id) profileImage FROM Comments c WHERE post_id = ?'
    const data = [post_id]
    const results = await conn.query(sql, data)
    conn.end()
    return results[0]
}

export default { createComment, getCommentsOfPost }
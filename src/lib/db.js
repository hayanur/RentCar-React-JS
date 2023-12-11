import mysql from "mysql2/promise"

export async function query({ query, values = [] }) {
    const dbconnection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'rentcar',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });

    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return results;
    } catch (error) {
        throw Error(error.message);
        return { error };
    }
}
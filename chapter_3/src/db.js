import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync(":memory:");

// Execute SQL statements from strings
db.exec(`
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    );
`);

db.exec(`
    CREATE TABLE todos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        task TEXT,
        completed BOOLEAN DEFAULT 0,
        FOREIGN KEY (userId) REFERENCES users(id)
    ); 
`);

export default db;

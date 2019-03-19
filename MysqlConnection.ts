import 'reflect-metadata';
import { createConnection } from 'typeorm';

let connection;

export default function getConnection() {
    if (!connection) {
        connection = createConnection()
            .catch(error => console.log(error));
    }
    return connection;
}



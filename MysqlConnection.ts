import 'reflect-metadata';
import { createConnection } from "typeorm";

let connection;

export default function getConnection() {
    if (!connection) {
        console.log('Sunt aici');
        connection = createConnection()
            .catch(error => console.log(error));
    }
    return connection;
}

// createConnection().then(async connection => {

//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);

//     const users = await connection.manager.find(User);


// }).catch(error => console.log(error));



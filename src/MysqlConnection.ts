import { createConnection } from 'typeorm';

export const connection = async () => {
    await createConnection()
        .catch(error => console.log(error));
};




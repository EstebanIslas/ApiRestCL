//Conexion a la DB
import MongoClient from 'mongodb';

//Se crea una funcion asincrona de conexion de DB
export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017',
        { useUnifiedTopology: true });
        const db = client.db('carlot');
        console.log('The Db has been conected')
        return db;
    } catch (error) {
        console.log(error);
    }
    
}

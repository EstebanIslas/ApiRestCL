import '@babel/polyfill'; //Se ejecuta en distintos entornos

import app from './server'; //importamos el Server
import { connect } from "./database";

//Se utiliza AsyncAwait en lugar de Callbacks
async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'));
} // se ejecuta 

main();
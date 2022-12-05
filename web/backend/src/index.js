import app from './app.js'
import {sequelize} from './database/database.js'
import './models/user.js'
import './models/aliment.js'

async function main(){
    try {
        await sequelize.sync({force:false});
        console.log("Conexiune cu baza de date realizata")
        app.listen(5432)
        console.log("Server listening on port 8080")
    } catch (error) {
        console.error("Unable to connect to the database",error)
    }
}

main();

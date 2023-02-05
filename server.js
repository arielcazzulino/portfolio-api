import app from '../Api/src/app.js';
import { sequelize } from './src/database/database.js';

/* import './src/models/Project.js'
import './src/models/Type.js'  */ 

const port = process.env.PORT || 3001;

async function main(){
  try {
    await sequelize.sync({force: false})
    console.log('DB connection has been established successfully')
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error(`error in server.js -> ${error}`)
  }
  
}

main();
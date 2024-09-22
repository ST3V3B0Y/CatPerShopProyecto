import { Sequelize } from "sequelize";


// Base de datos Clever Cloud

export const db = new Sequelize(
  "b7l0kdf9aaiprg6x683n",
  "u79iiqalpeyfryss",
  "pLzk67KcZ2aVSbCSCLVq",
  {
    host: "b7l0kdf9aaiprg6x683n-mysql.services.clever-cloud.com",
    dialect: "mysql",
  }
);

// Base de datos local

// export const db = new Sequelize("catpershop", "root", "", {
//   host: "127.0.0.1",
//   dialect: "mysql",
// });

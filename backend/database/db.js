import { Sequelize } from "sequelize";
// import { MySqlDialect } from "@sequelize/mysql";

export const db = new Sequelize(
  "b7l0kdf9aaiprg6x683n",
  "u79iiqalpeyfryss",
  "pLzk67KcZ2aVSbCSCLVq",
  {
    host: "b7l0kdf9aaiprg6x683n-mysql.services.clever-cloud.com",
    dialect: "mysql",
  }
);

// export const db = new Sequelize({
//   dialect: MySql,
//   database: "b7l0kdf9aaiprg6x683n",
//   user: "u79iiqalpeyfryss",
//   password: "pLzk67KcZ2aVSbCSCLVq",
//   host: "b7l0kdf9aaiprg6x683n-mysql.services.clever-cloud.com",
//   port: 3306,
// });

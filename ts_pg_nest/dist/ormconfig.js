"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const ormconfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    main: process.env.PORT,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    ssl: true,
};
exports.default = ormconfig;
//# sourceMappingURL=ormconfig.js.map
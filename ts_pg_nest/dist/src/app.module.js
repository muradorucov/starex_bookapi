"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_module_1 = require("./books/book.module");
const review_module_1 = require("./reviews/review.module");
const ormconfig_1 = require("../ormconfig");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: ormconfig_1.default.host,
                port: ormconfig_1.default.port,
                username: ormconfig_1.default.username,
                password: ormconfig_1.default.password,
                database: ormconfig_1.default.database,
                autoLoadEntities: true,
                synchronize: ormconfig_1.default.synchronize,
                ssl: ormconfig_1.default.ssl,
            }),
            book_module_1.BookModule,
            review_module_1.ReviewModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
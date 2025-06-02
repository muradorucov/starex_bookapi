"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
var ormconfig = ;
from;
'../ormconfig';
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen();
    console.log(`Server is running on http://localhost:${ormconfig.port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map
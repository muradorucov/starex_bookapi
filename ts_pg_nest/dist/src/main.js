"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const ormconfig_1 = require("../ormconfig");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Book Review API')
        .setDescription('Kitablar və rəylər üçün REST API')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(ormconfig_1.default.main || 3000);
    console.log(`Server is running on http://localhost:${ormconfig_1.default.main || 3000}`);
}
bootstrap();
//# sourceMappingURL=main.js.map
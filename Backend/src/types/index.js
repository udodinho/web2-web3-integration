"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const contractResolver_1 = require("../resolvers/contractResolver");
const userResolver_1 = require("../resolvers/userResolver");
dotenv_1.default.config();
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.MONGO_URI);
            console.log("Connected to MongoDB");
        }
        catch (error) {
            console.error("MongoDB connection error:", error);
            process.exit(1);
        }
        const schema = yield (0, type_graphql_1.buildSchema)({
            resolvers: [contractResolver_1.ContractResolver, userResolver_1.UserResolver],
        });
        const app = (0, express_1.default)();
        const server = new server_1.ApolloServer({ schema });
        yield server.start();
        app.use('/graphql', (0, cors_1.default)(), body_parser_1.default.json(), (0, express4_1.expressMiddleware)(server));
        app.listen(4000, () => {
            console.log("Server running on http://localhost:4000/graphql");
        });
    });
}
bootstrap().catch((error) => console.error(error));

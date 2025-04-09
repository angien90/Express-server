"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json()); // This specific middleware parses JSON string to Javascript Object
app.use((0, cors_1.default)()); // This makes the Express server except request from other domains
// Routes
const bloggposts_1 = __importDefault(require("./routes/bloggposts"));
app.use('/posts', bloggposts_1.default);
const subtasks_1 = __importDefault(require("./routes/subtasks"));
app.use('/subtasks', subtasks_1.default);
// Connect To DB
(0, db_1.connectToDatabase)();
// Start the express server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

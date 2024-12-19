"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_ts_1 = __importDefault(require("./app.ts")); // This requires `index.js` to have `export default app`
app_ts_1.default.listen(5000, () => console.log('server is running'));

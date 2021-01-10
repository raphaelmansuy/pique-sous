"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersion = void 0;
const fs = require("fs");
const Path = require("path");
const getVersion = () => {
    const packageJSONPath = Path.resolve(__dirname, "../package.json");
    const content = fs.readFileSync(packageJSONPath, { encoding: "utf8" });
    const config = JSON.parse(content);
    return config.version;
};
exports.getVersion = getVersion;
//# sourceMappingURL=getVersion.js.map
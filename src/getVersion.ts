import * as fs from "fs"
import * as Path from "path"

export const getVersion = () => {
  const packageJSONPath = Path.resolve(__dirname, "../package.json")
  const content = fs.readFileSync(packageJSONPath, { encoding: "utf8" })
  const config = JSON.parse(content)
  return config.version
}

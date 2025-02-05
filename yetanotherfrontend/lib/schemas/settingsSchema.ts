import { z } from "zod";
import fs from "fs";
import path from "path";

const componentsDir = path.join(process.cwd(), "../python/components/done");
const componentFiles = fs.readdirSync(componentsDir);

const modules = componentFiles.reduce((acc, file) => {
  const moduleName = path.basename(file, path.extname(file));
  acc[moduleName] = false;
  return acc;
}, {});

export const fields = {
  BotData: {
    Token: "",
    GuildID: "",
  },
  Modules: modules,
};

export const settingsSchema = z.object({
  BotData: z.object({
    Token: z.string(),
    GuildID: z.string(),
  }),
  Modules: z.object(
    Object.keys(modules).reduce((acc, moduleName) => {
      acc[moduleName] = z.boolean();
      return acc;
    }, {})
  ),
});

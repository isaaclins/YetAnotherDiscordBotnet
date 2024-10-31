// [lib/schemas/settingsSchema.ts]
import { z } from "zod";

export const fields = {
  BotData: {
    Token: "example",
    GuildID: "1423",
  },
  Modules: {
    Module1: true,
    Module2: false,
  },
};

export const settingsSchema = z.object({
  BotData: z.object({
    Token: z.string().nonempty(),
    GuildID: z.string().nonempty(),
  }),
  Modules: z.object({
    Module1: z.boolean(),
    Module2: z.boolean(),
  }),
});
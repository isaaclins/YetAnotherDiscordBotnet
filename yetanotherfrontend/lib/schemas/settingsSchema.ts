// [lib/schemas/settingsSchema.ts]
import { z } from "zod";

export const fields = {
  BotData: {
    Token: "Token Here",
    GuildID: "GuildID Here",
  },
  Modules: {
    Downloader: false,
    BSOD: false,
    Clipboard: false,
    AudioControlls: false,
    GhostWriter: false,
    KeyboardShortcuts: false,
    Keylogger: false,
    Obliterator: false,
    PasswordStealer: false,
    Screenshot: false,
    Webcam: false,
    WallpaperChanger: false,
    TTS: false,
  },
};

export const settingsSchema = z.object({
  BotData: z.object({
    Token: z.string().nonempty(),
    GuildID: z.string().nonempty(),
  }),
  Modules: z.object({
    Downloader: z.boolean(),
    BSOD: z.boolean(),
    Clipboard: z.boolean(),
    AudioControlls: z.boolean(),
    GhostWriter: z.boolean(),
    KeyboardShortcuts: z.boolean(),
    Keylogger: z.boolean(),
    Obliterator: z.boolean(),
    PasswordStealer: z.boolean(),
    Screenshot: z.boolean(),
    Webcam: z.boolean(),
    WallpaperChanger: z.boolean(),
    TTS: z.boolean(),
  }),
});
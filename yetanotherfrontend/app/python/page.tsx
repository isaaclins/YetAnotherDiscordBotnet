"use client";
import React, { useState } from "react";
import { z, ZodSchema } from "zod";
import FormComponent from "@/components/custom/FormComponent";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const createSchema = (fields: { [key: string]: any }, parentName: string = ''): ZodSchema => {
    const schema: any = {};
    Object.keys(fields).forEach((key) => {
        const value = fields[key];
        const fieldName = parentName ? `${parentName}.${key}` : key;
        if (typeof value === "string") {
            schema[fieldName] = z.string().nonempty();
        } else if (typeof value === "boolean") {
            schema[fieldName] = z.boolean();
        } else if (typeof value === "number") {
            schema[fieldName] = z.number();
        } else if (typeof value === "object" && value !== null) {
            Object.assign(schema, createSchema(value, fieldName));
        }
    });
    return z.object(schema);
};

const Page: React.FC = () => {
    const fields = {
        BotData: {
            Token: "example",
            GuildID: 1423,
        },
        Modules: {
            "Module1": true,
            "Module2": false,
        },
    };

    const schema = createSchema(fields);

    const [submittedData, setSubmittedData] = useState<any | null>(null);
    const [liveData, setLiveData] = useState<any>(fields);

    const onSubmit = async (data: any) => {
        try {
            console.log(data);
            const response = await fetch('/api/save-settings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                console.error('Failed to save settings.');
            } else {
                console.log('Settings saved successfully.');
                setSubmittedData(data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Botnet Customization</CardTitle>
                    <CardDescription>Customize and compile your very own Botnet.</CardDescription>
                </CardHeader>
                <CardContent className="grid w-full justify-center items-center gap-4">
                    <FormComponent onSubmit={onSubmit} liveData={liveData} setLiveData={setLiveData} fields={fields} schema={schema} />
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;
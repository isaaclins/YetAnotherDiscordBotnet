"use client"

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
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const createSchema = (fields: { [key: string]: string | boolean | number }): ZodSchema => {
    const schema: any = {};
    Object.keys(fields).forEach((key) => {
        const value = fields[key];
        if (typeof value === "string") {
            schema[key] = z.string().nonempty();
        } else if (typeof value === "boolean") {
            schema[key] = z.boolean();
        } else if (typeof value === "number") {
            schema[key] = z.number();
        }
    });
    return z.object(schema);
};

const Page: React.FC = () => {
    const fields = {
        String: "example",
        boolean: false,
        integers: 1423,
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
        <div>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Botnet Customization</CardTitle>
                    <CardDescription>Customize and compile your very own Botnet.</CardDescription>
                </CardHeader>
                <CardContent className="grid w-full items-center gap-4">
                    <FormComponent  onSubmit={onSubmit} liveData={liveData} setLiveData={setLiveData} fields={fields} schema={schema} />
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Compile</Button>
                    <Button>Save</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Page;
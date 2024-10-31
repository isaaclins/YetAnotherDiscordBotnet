"use client"

import React, { useState } from "react";
import { z, ZodSchema } from "zod";
import FormComponent from "@/components/custom/FormComponent";

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
        <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
            <FormComponent onSubmit={onSubmit} liveData={liveData} setLiveData={setLiveData} fields={fields} schema={schema} />
        </div>
    );
};

export default Page;
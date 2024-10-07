"use client"

import React, { useState } from "react";
import { z } from "zod";
import FormComponent from "@/components/custom/FormComponent";

const FormSchema = z.object({
    token: z.string().nonempty(),
    ScreenshotModule: z.boolean(),
    additionalCheckbox: z.boolean(),
    radioOption: z.string(),
});

const Page: React.FC = () => {
    const [submittedData, setSubmittedData] = useState<z.infer<typeof FormSchema> | null>(null);
    const [liveData, setLiveData] = useState<z.infer<typeof FormSchema>>({
        token: '',
        ScreenshotModule: false,
        additionalCheckbox: false,
        radioOption: '',
    });

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
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
            <FormComponent onSubmit={onSubmit} liveData={liveData} setLiveData={setLiveData} />
        </div>
    );
};

export default Page;
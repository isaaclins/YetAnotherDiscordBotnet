"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { settingsSchema, fields } from "@/lib/schemas/settingsSchema";
import FormComponent from "@/components/custom/FormComponent";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


/**
 * @issue CorrectCheckboxSpacing
 * @body When clicking a checkbox, the selected checkbox moves up slightly, causing inconsistent spacing.
 */

const Page: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(settingsSchema),
        defaultValues: fields,
    });

    const [submittedData, setSubmittedData] = useState<any | null>(null);
    const [liveData, setLiveData] = useState<any>(fields);
    const onSubmit = async (data: any) => {
        try {
            console.log(data);
            let dataToSend =liveData
            const response = await fetch('/api/save-settings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
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
                    <FormComponent onSubmit={handleSubmit(onSubmit)} liveData={liveData} setLiveData={setLiveData} fields={fields} />
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;
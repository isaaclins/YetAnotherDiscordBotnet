"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState, useEffect } from "react"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Terminal } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"
const FormSchema = z.object({
    username: z.string().nonempty(),
});

const Page: React.FC = () => {
    const [submittedData, setSubmittedData] = useState<z.infer<typeof FormSchema> | null>(null);
    const [liveData, setLiveData] = useState<z.infer<typeof FormSchema>>({ username: '' });

    const form = useForm({
        defaultValues: {
            username: '',
        },
        resolver: zodResolver(FormSchema),
    });

    const watchedValues = form.watch();

    useEffect(() => {
        setLiveData(watchedValues);
    }, [watchedValues]);

    async function onSubmit(data: z.infer<typeof FormSchema>) {
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
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} method="POST" className="w-2/3 space-y-6 flex flex-col items-center">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <Input {...field} placeholder="Username" className="w-full sm:w-1/2" />
                        )}
                    />
                    <Button type="submit" className="w-full sm:w-1/2">Save</Button>
                </form>
            </Form>
            <Alert className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 z-50 w-2/3 transition-opacity duration-1000 opacity-100">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Live Data:</AlertTitle>
                <AlertDescription>
                    <pre>{JSON.stringify(liveData, null, 2)}</pre>
                </AlertDescription>
            </Alert>
        </div>
    );
};

export default Page;
